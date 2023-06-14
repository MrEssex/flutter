import eslint from "gulp-eslint-new";
import gulpLoadPlugins from "gulp-load-plugins";

interface GulpPlugins extends IGulpPlugins {
  eslint: typeof eslint;
}

export const plugins: GulpPlugins = gulpLoadPlugins({
  pattern: ['gulp-*', 'gulp.*'],
  config: 'package.json',
  scope: ['dependencies', 'devDependencies', 'peerDependencies'],
  replaceString: /^gulp(-|\.)/,
  camelize: true,
  lazy: true,
  rename: {}
});