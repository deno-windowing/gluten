# Deno Gluten

[![Tags](https://img.shields.io/github/release/deno-windowing/gluten)](https://github.com/deno-windowing/gluten/releases)
[![Doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/gluten/mod.ts)
[![License](https://img.shields.io/github/license/deno-windowing/gluten)](https://github.com/deno-windowing/gluten/blob/master/LICENSE)
[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/DjDeveloperr)

OpenGL bindings & WebGL API implementation for Deno.

Note: WebGL API is WIP.

## Usage

Import native OpenGL from `/api/gl[es|es2]{version}.ts`.

All the functions map 1:1 with the C OpenGL API.

Extensions are present in `/api/ext/*`.

Before using the API, make sure to create OpenGL context and load function
pointers using `load` function exported, which accepts a `getProcAddress`
callback ([DWM](https://github.com/deno-windowing/dwm) handles both).

```ts
// GLES2 3.2 API
import * as gl from "https://deno.land/x/gluten@0.1.8/api/gles23.2.ts";

// Initialize function pointers
gl.load(yourGetProcAddress);

// ... Initialize context (for example using DWM)

// Use APIs from `gl` i.e. gl.DrawElements(...)
```

For using WebGL, `mod.ts` exports `WebGLCanvas` which handles both window and
context creation.

Check [./examples](./examples/) for some usage examples.

Since this module depends on unstable FFI API, you need to pass `--unstable-ffi`.

```sh
deno run -A --unstable-ffi <file>
```

Extensions:

- [Babylon](https://www.babylonjs.com/) (Use `ext/babylon.ts` for an easy to use
  wrapper)

## Maintainers

- Dj ([@DjDeveloperr](https://github.com/DjDeveloperr))
- Dean Srebnik ([@load1n9](https://github.com/load1n9))

## License

[Apache-2.0](./LICENSE) licensed.

Copyright 2024 © The Deno Windowing Team
