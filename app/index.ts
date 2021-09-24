import init, * as exports from "../target/trunk/@appName@";

const wasmPath = '../target/trunk/@appName@_bg.wasm';

init(wasmPath).then((wasm: any) => {
    console.log(wasm);
    console.log(exports.greet("Wasm"));
});

export function hello(name: string) {
    console.log(exports.greet(name));
}
