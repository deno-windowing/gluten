# Deno Gluten

[![Tags](https://img.shields.io/github/release/deno-windowing/gluten)](https://github.com/deno-windowing/gluten/releases)
[![Doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/gluten/mod.ts)
[![License](https://img.shields.io/github/license/deno-windowing/gluten)](https://github.com/deno-windowing/gluten/blob/master/LICENSE)
[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/DjDeveloperr)

OpenGL bindings & WebGL API implementation for Deno.

## Usage

Import native OpenGL from `/api/gl[es|es2]{version}.ts`.

Extensions are present in `/api/ext/*`.

Before using the API, make sure to create OpenGL context and load function
pointers using `load` function exported, which accepts a `getProcAddress`
callback ([DWM](https://github.com/deno-windowing/dwm) handles both).

For using WebGL, `mod.ts` exports `WebGLCanvas` which handles both window and
context creation.

Check [./examples](./examples/) for some usage examples.

Since this module depends on unstable FFI API, you need to pass `--unstable`
along with `--allow-ffi`.

```sh
deno run --unstable --allow-ffi <file>
```

## Maintainers

- Dj ([@DjDeveloperr](https://github.com/DjDeveloperr))
- Loading ([@load1n9](https://github.com/load1n9))

## License

[Apache-2.0](./LICENSE) licensed.

Copyright 2022 © The Deno Windowing Team
