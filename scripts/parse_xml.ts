import { XMLParser } from "npm:fast-xml-parser";

const parser = new XMLParser({
  ignoreAttributes: false,
  allowBooleanAttributes: true,
  parseTagValue: true,
  parseAttributeValue: true,
  alwaysCreateTextNode: true,
  attributeNamePrefix: "$",
});
const xml = Deno.readTextFileSync(
  new URL("../OpenGL-Registry/xml/gl.xml", import.meta.url),
);

const gl = parser.parse(xml);

Deno.writeTextFileSync(
  new URL("../data/gl.json", import.meta.url),
  JSON.stringify(gl, null, 2),
);

console.log("Emit data/gl.json");
