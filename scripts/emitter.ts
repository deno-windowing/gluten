import {
  type Command,
  commands,
  enums,
  type Extension,
  extensions,
  type Feature,
  features,
  type RequireOrRemove,
  typedefs,
} from "./process_xml.ts";

let src = "";
let ident = 0;

export function reset() {
  src = `/// This file is auto-generated. Do not edit.\n`;
  ident = 0;
}

export function newline() {
  emit("");
}

export function emit(line: string, newline = "\n") {
  src += ("  ".repeat(ident)) + line + newline;
}

export function block(fn: CallableFunction) {
  ident += 1;
  fn();
  ident -= 1;
}

export function jsify(name: string) {
  return ["function"].includes(name) ? "_" + name : name;
}

export function stripGL(name: string) {
  if (name.startsWith("gl")) {
    name = name.slice(2);
  } else if (name.startsWith("GL_")) {
    name = name.slice(3);
  }
  if (name.match(/^[0-9]/)) {
    name = "GL_" + name;
  }
  return name;
}

export function write(file: string) {
  Deno.writeTextFileSync(new URL(file, import.meta.url), src);
}

export function toJSType(ty: string): string {
  switch (ty) {
    case "u8":
    case "u16":
    case "u32":
    case "i8":
    case "i16":
    case "i32":
    case "f32":
    case "f64":
      return "number";
    case "void":
      return "void";
    case "u64":
    case "i64":
    case "usize":
    case "isize":
      return "Deno.PointerValue";
    case "buffer":
    case "pointer":
      return "Buffer";
    default: {
      if (ty.endsWith("*")) {
        return toJSType("pointer");
      }
      const td = typedefs.find((t) => t.name === ty);
      if (td) {
        return td.name;
      }
      throw new Error(`Unknown type: ${ty}`);
    }
  }
}

export function toFFIType(ty: string): string {
  switch (ty) {
    case "u8":
    case "u16":
    case "u32":
    case "i8":
    case "i16":
    case "i32":
    case "f32":
    case "f64":
    case "void":
    case "u64":
    case "i64":
    case "usize":
    case "isize":
    case "buffer":
      return ty;
    case "pointer":
      return "buffer";
    default: {
      if (ty.endsWith("*")) {
        return toFFIType("pointer");
      }
      const td = typedefs.find((t) => t.name === ty);
      if (td) {
        return toFFIType(td.type);
      }
      throw new Error(`Unknown type: ${ty}`);
    }
  }
}

export function emitRequire(req: RequireOrRemove) {
  newline();
  emit("/// Util");
  emit(
    `export type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;`,
  );
  emit(
    `const isTypedArray = (arr: unknown) => arr instanceof Int8Array || arr instanceof Uint8Array || arr instanceof Int16Array || arr instanceof Uint16Array || arr instanceof Int32Array || arr instanceof Uint32Array || arr instanceof Float32Array || arr instanceof Float64Array;`,
  );
  emit(
    `export type Buffer = TypedArray | ArrayBuffer | null | Deno.PointerValue;`,
  );
  newline();
  emit("export function bufferToFFI(buf: Buffer): Uint8Array | null {");
  block(() => {
    emit("if (buf === null) return null;");
    emit(`if (buf instanceof ArrayBuffer) {`);
    block(() => {
      emit(`return new Uint8Array(buf);`);
    });
    emit(`} else if (isTypedArray(buf)) {`);
    block(() => {
      emit(
        "return new Uint8Array((buf as TypedArray).buffer);",
      );
    });
    emit(`} else {`);
    block(() => {
      emit(
        `return new Uint8Array(Deno.UnsafePointerView.getArrayBuffer((buf as Deno.PointerValue)!, 1));`,
      );
    });
    emit(`}`);
  });
  emit("}");
  newline();
  emit("/// Typedefs");
  for (const td of typedefs) {
    if (td.comment) {
      emit(`/** ${td.comment} */`);
    }
    emit(`export type ${td.name} = ${toJSType(td.type)};`);
  }

  if (req.enums.length > 0) {
    newline();
    emit("/// Enums");
    for (const name of req.enums) {
      const en = enums.find((e) => e.name === name);
      if (!en) {
        throw new Error(`Enum ${name} not found`);
      }
      emit(
        `export const ${stripGL(en.name)} = ${
          typeof en.value === "number"
            ? ("0x" + en.value.toString(16))
            : en.value
        };`,
      );
    }
  }

  if (req.commands.length > 0) {
    newline();
    emit("/// Commands");
    for (const name of req.commands) {
      const cmd = commands.find((c) => c.name === name);
      if (!cmd) {
        throw new Error(`Command ${name} not found`);
      }
      newline();
      emitCommand(cmd);
    }

    newline();
    emit(`/** Loads all OpenGL API function pointers. */`);
    emit(
      `export function load(proc: (name: string) => Deno.PointerValue): void {`,
    );
    block(() => {
      for (const name of req.commands) {
        const cmd = commands.find((c) => c.name === name);
        if (!cmd) {
          throw new Error(`Command ${name} not found`);
        }
        emit(
          `fn_${cmd.name} = new Deno.UnsafeFnPointer(proc("${cmd.name}")!, def_${cmd.name});`,
        );
      }
    });
    emit(`}`);
  }
}

export function emitCommand(cmd: Command) {
  emit(`export const def_${cmd.name} = {`);
  block(() => {
    emit(
      `parameters: [${
        cmd.params.map((e) => `"${toFFIType(e.type)}"`).join(", ")
      }],`,
    );
    emit(`result: "${toFFIType(cmd.result)}",`);
  });
  emit(`} as const;`);
  newline();
  emit(`let fn_${cmd.name}!: Deno.UnsafeFnPointer<typeof def_${cmd.name}>;`);
  newline();
  if (cmd.comment) {
    emit(`/** ${cmd.comment} */`);
  }
  const rtype = toJSType(cmd.result);
  if (cmd.params.length) {
    emit(`export function ${stripGL(cmd.name)}(`);
    block(() => {
      for (const p of cmd.params) {
        emit(`${p.name}: ${toJSType(p.type)},`);
      }
    });
    emit(`): ${rtype} {`);
  } else {
    emit(`export function ${stripGL(cmd.name)}(): ${rtype} {`);
  }
  block(() => {
    const ret = cmd.result !== "void" ? "return " : "";
    if (cmd.params.length === 0) {
      emit(`${ret}fn_${cmd.name}.call();`);
    } else {
      emit(`${ret}fn_${cmd.name}.call(`);
      block(() => {
        for (const p of cmd.params) {
          emit(
            `${
              toFFIType(p.type) === "buffer"
                ? `bufferToFFI(${p.name})`
                : p.type === "GLsizeiptr" || p.type === "GLuint64"
                ? `Deno.UnsafePointer.value(${p.name})`
                : p.name
            },`,
          );
        }
      });
      emit(`);`);
    }
  });
  emit(`}`);
}

export function emitFeature(feature: Feature) {
  reset();
  const accum: RequireOrRemove = {
    typedefs: [],
    enums: [],
    commands: [],
  };
  for (const f of features) {
    if (f.api !== feature.api) continue;
    if (f.number <= feature.number) {
      accum.enums.push(...f.require.enums);
      accum.commands.push(...f.require.commands);
      accum.typedefs = accum.typedefs.filter((x) =>
        !f.remove.typedefs.includes(x)
      );
      accum.enums = accum.enums.filter((x) => !f.remove.enums.includes(x));
      accum.commands = accum.commands.filter((x) =>
        !f.remove.commands.includes(x)
      );
    }
  }
  accum.enums = [...new Set(accum.enums)];
  accum.commands = [...new Set(accum.commands)];
  emitRequire(accum);
  write(`../api/${feature.api}${feature.number}.ts`);
  console.log("Emit", feature.api, feature.number);
}

export function emitExtension(ext: Extension) {
  reset();
  emitRequire(ext.require);
  write("../api/ext/" + ext.name + ".ts");
  console.log("Emit", ext.name);
}

try {
  Deno.removeSync(new URL("../api", import.meta.url), { recursive: true });
} catch (_e) {
  // pass
}

Deno.mkdirSync(new URL("../api", import.meta.url));
Deno.mkdirSync(new URL("../api/ext", import.meta.url));

for (const feature of features) {
  emitFeature(feature);
}

for (const ext of extensions) {
  emitExtension(ext);
}
