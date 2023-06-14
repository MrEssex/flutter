import eslintNew from "gulp-eslint-new";
interface GulpPlugins extends IGulpPlugins {
    eslintNew: typeof eslintNew;
}
export declare const plugins: GulpPlugins;
export {};
