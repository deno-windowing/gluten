const gl2_h = Deno.readTextFileSync(
  new URL("../OpenGL-Registry/api/GLES2/gl2.h", import.meta.url),
);
// const gl2ext_h = Deno.readTextFileSync(
//   new URL("../OpenGL-Registry/api/GLES2/gl2ext.h", import.meta.url),
// );

const typedefs: Record<string, string> = {};
const constants: Record<string, string> = {};
const callbacks: Record<string, {
  parameters: Record<string, string>;
  result: string;
}> = {};
const functions: Record<string, {
  parameters: Record<string, string>;
  result: string;
}> = {};

const lines = gl2_h.split("\n").map((line) => line.trim());

for (let line of lines) {
  if (line.startsWith("typedef ")) {
    if (line.includes("(GL_APIENTRYP PFN")) {
      line = line.slice("typedef ".length).trim().replace(/;$/, "");
      const parts = line.split(/ +/);
      let result = parts.shift()!;
      let _ = parts.shift(); // (GL_APIENTRYP
      while (!_?.includes("(GL_APIENTRYP")) {
        result += " " + _;
        _ = parts.shift();
      }
      if (_.startsWith("*")) {
        result += "*";
      }
      const name = parts.shift()!.replace(")", "");
      const parameters: Record<string, string> = {};
      for (let p of line.split(") (")[1].replace(")", "").split(",")) {
        p = p.trim();
        if (p === "void") {
          continue;
        }
        const parts = p.split(/ +/);
        let name = parts.pop()!.trim();
        if (name.includes("const*")) {
          name = "*" + name.replace("const*", "const_");
        }
        const type = parts.join(" ");
        parameters[name] = type;
      }
      callbacks[name] = { parameters, result };
    } else {
      const parts = line.slice("typedef ".length).trim().replace(/;$/, "")
        .split(/\s+/);
      const name = parts.pop()!;
      const type = parts.join("_");
      typedefs[name] = type;
    }
  } else if (line.startsWith("#define ")) {
    const [_, name, value] = line.split(/\s+/);
    constants[name.trim()] = value.trim();
  } else if (line.startsWith("GL_APICALL ")) {
    line = line.slice("GL_APICALL ".length).trim().replace(/;$/, "");
    const parts = line.split(/ +/);
    let result = parts.shift()!;
    let _ = parts.shift(); // GL_APIENTRY
    while (!_?.includes("GL_APIENTRY")) {
      result += " " + _;
      _ = parts.shift();
    }
    if (_.startsWith("*")) {
      result += "*";
    }
    const name = parts.shift()!;
    const parameters: Record<string, string> = {};
    for (let p of line.split("(")[1].replace(")", "").split(",")) {
      p = p.trim();
      if (p === "void") {
        continue;
      }
      const parts = p.split(/ +/);
      let name = parts.pop()!.trim();
      if (name.includes("const*")) {
        name = "*" + name.replace("const*", "const_");
      }
      const type = parts.join("_");
      parameters[name] = type;
    }
    functions[name] = { parameters, result };
  }
}

let src =
  `// deno-fmt-ignore-file\n/// This file is generated by scripts/generator.ts\n\n`;

src +=
  `export type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;\n\n`;

const SPECIAL_TYPEDEFS: Record<string, string> = {
  "khronos_int8_t": '"i8"',
  "khronos_uint8_t": '"u8"',
  "khronos_int16_t": '"i16"',
  "khronos_uint16_t": '"u16"',
  "khronos_int32_t": '"i32"',
  "khronos_uint32_t": '"u32"',
  "khronos_int64_t": '"i64"',
  "khronos_uint64_t": '"u64"',
  "khronos_float_t": '"f32"',
  "khronos_ssize_t": '"isize"',
  "khronos_usize_t": '"usize"',
  "unsigned_int": '"u32"',
  "void": '"void"',
  "char": '"i8"',
  "unsigned_char": '"u8"',
  "int": '"i32"',
  "khronos_intptr_t": '"isize"',
  "GLsync": '"pointer"',
  "GLDEBUGPROC": '"pointer"',
};

const FFI_TO_JS: Record<string, string> = {
  "u8": "number",
  "i8": "number",
  "u16": "number",
  "i16": "number",
  "u32": "number",
  "i32": "number",
  "u64": "number | bigint",
  "i64": "number | bigint",
  "f32": "number",
  "f64": "number",
  "pointer": "Deno.PointerValue",
  "buffer": "TypedArray",
  "isize": "number | bigint",
  "usize": "number | bigint",
};

src += "// Typedefs\n\n";

for (let name in typedefs) {
  let v = typedefs[name];
  if (v in SPECIAL_TYPEDEFS) {
    v = SPECIAL_TYPEDEFS[v];
  }
  while (name.startsWith("*")) {
    name = name.slice(1);
    v = '"pointer"';
  }
  src += `export const ${name.replaceAll(")", "")} = ${v};\n`;
}

src += "\n// Constants\n\n";

for (const name in constants) {
  if (constants[name].endsWith("*")) continue;
  const v = constants[name];
  src += `export const ${name.startsWith("GL_") ? name.slice(3) : name} = ${
    v.trim().replace(/(u|ull)$/, "")
  };\n`;
}

src += "\n// Callbacks\n\n";

for (const name in callbacks) {
  src += `export const ${name} = {\n`;
  src += `  parameters: [\n`;
  for (let pname in callbacks[name].parameters) {
    let v = callbacks[name].parameters[pname];
    if (v in SPECIAL_TYPEDEFS) {
      v = SPECIAL_TYPEDEFS[v];
    }
    while (pname.startsWith("*")) {
      pname = pname.slice(1);
      v = '"pointer"';
    }
    src += `    /* ${pname}: */ ${v},\n`;
  }
  src += `  ],\n`;
  let rtype = SPECIAL_TYPEDEFS[callbacks[name].result] ??
    callbacks[name].result;
  if (rtype.endsWith("*")) {
    rtype = '"pointer"';
  }
  src += `  result: ${rtype},\n`;
  src += `} as const;\n\n`;
}

src += "\n// Functions\n\n";

for (const name in functions) {
  src += `const def_${name} = {\n`;
  src += `  parameters: [\n`;
  for (let pname in functions[name].parameters) {
    const originalPname = pname;
    let v = functions[name].parameters[pname];
    if (v in SPECIAL_TYPEDEFS) {
      v = SPECIAL_TYPEDEFS[v];
    }
    while (pname.startsWith("*")) {
      pname = pname.slice(1);
      v = functions[name].parameters[originalPname].includes("void") &&
          !["glBufferData"].includes(name)
        ? '"pointer"'
        : '"buffer"';
    }
    src += `    /* ${pname}: */ ${v},\n`;
  }
  src += `  ],\n`;
  let rtype = SPECIAL_TYPEDEFS[functions[name].result] ??
    functions[name].result;
  if (rtype.endsWith("*")) {
    rtype = '"pointer"';
  }
  src += `  result: ${rtype},\n`;
  src += `} as const;\n\n`;
  src += `let ${name}!: Deno.UnsafeFnPointer<typeof def_${name}>;\n\n`;
  src += `export function ${name.startsWith("gl") ? name.slice(2) : name}(\n`;
  for (let pname in functions[name].parameters) {
    const originalPname = pname;
    let v = functions[name].parameters[pname].trim();
    if (v in SPECIAL_TYPEDEFS) {
      v = SPECIAL_TYPEDEFS[v];
    }
    while (pname.startsWith("*")) {
      pname = pname.slice(1);
      v = functions[name].parameters[originalPname].includes("void") &&
          !["glBufferData"].includes(name)
        ? '"pointer"'
        : '"buffer"';
    }
    while (v in typedefs) {
      v = typedefs[v];
    }
    if (v in SPECIAL_TYPEDEFS) {
      v = SPECIAL_TYPEDEFS[v];
    }
    if (!v.startsWith('"')) {
      throw new Error(
        `Unknown type: ${v} (${functions[name].parameters[pname]})`,
      );
    }
    v = v.slice(1, -1);
    v = FFI_TO_JS[v] ?? v;
    src += `  ${pname}: ${v},\n`;
  }
  while (rtype in typedefs) {
    rtype = typedefs[rtype];
  }
  if (rtype in SPECIAL_TYPEDEFS) {
    rtype = SPECIAL_TYPEDEFS[rtype];
  }
  if (!rtype.startsWith('"')) {
    throw new Error(
      `Unknown type: ${rtype} (${functions[name].result}) :: ${name}`,
    );
  }
  rtype = rtype.slice(1, -1);
  src += `): ${FFI_TO_JS[rtype] ?? rtype} {\n`;
  src += `  return ${name}.call(\n`;
  for (let pname in functions[name].parameters) {
    while (pname.startsWith("*")) {
      pname = pname.slice(1);
    }
    src += `    ${pname},\n`;
  }
  src += `  );\n`;
  src += `}\n\n`;
}

src += "// Loader\n\n";

src += `export function loadGL(proc: (name: string) => Deno.PointerValue) {\n`;
for (const name in functions) {
  src +=
    `  ${name} = new Deno.UnsafeFnPointer(proc("${name}")!, def_${name});\n`;
}
src += `}\n`;

Deno.writeTextFileSync(new URL("../api/gles2.ts", import.meta.url), src);
