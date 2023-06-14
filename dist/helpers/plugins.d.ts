import eslint from "gulp-eslint-new";
interface GulpPlugins extends IGulpPlugins {
    eslint: typeof eslint;
}
export declare const plugins: GulpPlugins;
export {};
