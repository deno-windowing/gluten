export const cstr = (str: string) => new TextEncoder().encode(str + "\0");
