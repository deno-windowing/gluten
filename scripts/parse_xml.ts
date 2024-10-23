import { parse } from "npm:fast-xml-parser@3.17.0";

const xml = Deno.readTextFileSync(
  new URL("../OpenGL-Registry/xml/gl.xml", import.meta.url),
);

const gl = parse(xml, {
  ignoreAttributes: false,
  allowBooleanAttributes: true,
  parseAttributeValue: true,
  attributeNamePrefix: "$",
});

Deno.writeTextFileSync(
  new URL("../data/gl.json", import.meta.url),
  JSON.stringify(gl, null, 2),
);

console.log("Emit data/gl.json");
