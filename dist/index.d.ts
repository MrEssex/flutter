/// <reference types="node" />
import { GulpESLintOptions } from "gulp-eslint-new";
interface lintOptions {
    eslint: GulpESLintOptions;
}
export declare function lintTask(src: string, opts: lintOptions): NodeJS.ReadWriteStream;
export {};
