export const api =
  JSON.parse(Deno.readTextFileSync(new URL("../data/gl.json", import.meta.url)))
    .registry;

export interface Typedef {
  name: string;
  type: string;
  comment?: string;
}

export interface Enum {
  name: string;
  value: string | number;
  groups: string[];
}

export interface CommandParam {
  name: string;
  type: string;
  group?: string;
}

export interface Command {
  name: string;
  params: CommandParam[];
  result: string;
  comment?: string;
}

export interface RequireOrRemove {
  typedefs: string[];
  enums: string[];
  commands: string[];
}

export interface Feature {
  number: number;
  name: string;
  api: string;
  require: RequireOrRemove;
  remove: RequireOrRemove;
}

export interface Extension {
  name: string;
  require: RequireOrRemove;
  supported: string[];
}

export const typedefs: Typedef[] = [];
export const enums: Enum[] = [];
export const commands: Command[] = [];
export const features: Feature[] = [];
export const extensions: Extension[] = [];

for (const td of api.types.type) {
  if (
    td["#text"].startsWith("#include") ||
    (td["#text"] === ";" && td.name["#text"].includes("_cl"))
  ) {
    continue;
  } else if (td["#text"].includes("typedef ")) {
    const name = td.$name || td.name["#text"];
    const comment = td.$comment;
    const ctype = td["#text"].match(/typedef (.*);/)?.[1];
    let type;
    switch (ctype) {
      case "unsigned int":
        type = "u32";
        break;
      case "khronos_uint64_t":
      case "unsigned long":
        type = "u64";
        break;
      case "khronos_uint8_t":
      case "unsigned char":
        type = "u8";
        break;
      case "khronos_uint16_t":
      case "unsigned short":
        type = "u16";
        break;
      case "khronos_int32_t":
      case "int":
        type = "i32";
        break;
      case "void":
        type = "void";
        break;
      case "khronos_int8_t":
      case "char":
        type = "i8";
        break;
      case "khronos_int16_t":
      case "short":
        type = "i16";
        break;
      case "long":
      case "khronos_int64_t":
        type = "i64";
        break;
      case "khronos_float_t":
      case "float":
        type = "f32";
        break;
      case "double":
        type = "f64";
        break;
      case "khronos_intptr_t":
      case "void *":
        type = "pointer";
        break;
      case "khronos_ssize_t":
      case "size_t":
        type = "isize";
        break;
      case "khronos_usize_t":
        type = "usize";
        break;
      default:
        if (
          ctype.startsWith("void (*)") || ctype.endsWith("*") ||
          ctype.startsWith("void *")
        ) {
          type = "pointer";
          break;
        } else {
          const intypes = typedefs.find((t) => t.name === ctype);
          if (intypes) {
            type = intypes.type;
            break;
          }
          throw new Error(`Unknown C type ${ctype}`);
        }
    }
    typedefs.push({ name, type, comment });
  } else {
    console.log("Unknown Typedef", td);
  }
}

for (const td of api.enums) {
  if (!td.enum) {
    continue;
  }
  if (!Array.isArray(td.enum)) {
    td.enum = [td.enum];
  }
  for (const e of td.enum) {
    const name = e.$name;
    const value = e.$value;
    const groups = e.$group?.split(",") || [];
    enums.push({ name, value, groups });
  }
}

for (const cmd of api.commands.command) {
  const result = cmd.proto["#text"] ?? cmd.proto.ptype["#text"];
  const name = cmd.proto.name["#text"];
  const params: CommandParam[] = [];
  if (!cmd.param) {
    cmd.param = [];
  }
  if (!Array.isArray(cmd.param)) {
    cmd.param = [cmd.param];
  }
  for (const p of cmd.param) {
    const type = p.ptype?.["#text"]
      ? (p.ptype?.["#text"] + " " + (p["#text"] ?? "")).trim()
      : p["#text"];
    const name = p.name["#text"];
    const group = p.$group;
    params.push({ name, type, group });
  }
  commands.push({
    name,
    params,
    result,
  });
}

// deno-lint-ignore no-explicit-any
function makeRequireOrRemove(prop: any): RequireOrRemove {
  const require: RequireOrRemove = {
    typedefs: [],
    enums: [],
    commands: [],
  };
  if (!Array.isArray(prop)) {
    prop = [prop];
  }
  for (const req of prop) {
    if (req.type) {
      if (!Array.isArray(req.type)) {
        req.type = [req.type];
      }
      for (const t of req.type) {
        require.typedefs.push(t.$name);
      }
    }
    if (req.enum) {
      if (!Array.isArray(req.enum)) {
        req.enum = [req.enum];
      }
      for (const e of req.enum) {
        require.enums.push(e.$name);
      }
    }
    if (req.command) {
      if (!Array.isArray(req.command)) {
        req.command = [req.command];
      }
      for (const c of req.command) {
        require.commands.push(c.$name);
      }
    }
  }
  return require;
}

for (const f of api.feature) {
  const number = f.$number;
  const name = f.$name;
  const api = f.$api;
  const require = makeRequireOrRemove(f.require ?? []);
  const remove = makeRequireOrRemove(f.remove ?? []);
  features.push({ number, name, api, require, remove });
}

for (const e of api.extensions.extension) {
  const name = e.$name;
  const require = makeRequireOrRemove(e.require ?? []);
  const supported = e.$supported.split("|");
  extensions.push({ name, supported, require });
}
