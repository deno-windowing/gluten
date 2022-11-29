import {
  commands,
  enums,
  Extension,
  extensions,
  Feature,
  features,
  RequireOrRemove,
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
  if (["function"].includes(name)) {
    return "_" + name;
  } else {
    return name;
  }
}

export function write(file: string) {
  Deno.writeTextFileSync(new URL(file, import.meta.url), src);
}

export function toJSType(ty: string) {
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
    case "pointer":
      return "Deno.PointerValue";
    default:
      throw new Error(`Unknown type: ${ty}`);
  }
}

export function emitRequire(req: RequireOrRemove) {
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
        `export const ${en.name} = ${
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
    }
  }
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

// for (const ext of extensions) {
//   emitExtension(ext);
// }
