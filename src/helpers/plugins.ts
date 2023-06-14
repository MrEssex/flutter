import eslintNew from "gulp-eslint-new";
import gulpLoadPlugins from "gulp-load-plugins";

interface GulpPlugins extends IGulpPlugins {
  eslintNew: typeof eslintNew;
}

export const plugins: GulpPlugins = gulpLoadPlugins({
  pattern: ['gulp-*', 'gulp.*'],
  scope: ['dependencies', 'devDependencies', 'peerDependencies'],
  replaceString: /^gulp(-|\.)/,
  camelize: true,
  lazy: true,
  rename: {}
});