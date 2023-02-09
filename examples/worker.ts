// deno-lint-ignore-file
import { Image } from '../src/dom/image.ts';
// @ts-ignore
declare const self = { postMessage: unknown, close: unknown };

async function loadImageArray(src: string) {
    const image = new Image();
    await new Promise(resolve => {
        image.onload = resolve;
        image.src = src;
    });
    return image.rawData;
}

self.postMessage(await loadImageArray("https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Red_Circle(small).svg/2048px-Red_Circle(small).svg.png"));