import * as gulp from 'gulp';
import eslint, {GulpESLintOptions} from "gulp-eslint-new";
// import * as gulpLoadPlugins from 'gulp-load-plugins';

// interface GulpPlugins extends IGulpPlugins {
//   eslint: typeof eslint;
// }
//
// const plugins = gulpLoadPlugins<GulpPlugins>({
//   pattern: ['gulp-*', 'gulp.*'],
//   config: 'package.json',
//   scope: ['dependencies', 'devDependencies', 'peerDependencies'],
//   replaceString: /^gulp(-|\.)/,
//   camelize: true,
//   lazy: true,
//   rename: {}
// });

interface lintOptions {
  eslint: GulpESLintOptions;
}

export function lintTask(src: string, opts: lintOptions = null): () => NodeJS.ReadWriteStream {
  return function () {
    // Default options
    let defaultOpts: lintOptions = {
      eslint: {
        baseConfig: {
          extends: ['eslint:recommended'],
          env: {
            browser: true,
            node: true,
            es6: true
          },
          parserOptions: {
            ecmaVersion: 7,
            ecmaFeatures: {
              jsx: true,
            }
          }
        }
      }
    }

    //if src contains .ts, then use typescript-eslint-parser
    if (src.indexOf('.ts') > -1) {
      defaultOpts = Object.assign({}, defaultOpts, {
        eslint: {
          baseConfig: {
            extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
            parser: 'typescript-eslint-parser',
            plugins: ['@typescript-eslint'],
            root: true,
          }
        }
      });
    }

    // Merge default options with user options
    opts = Object.assign({}, defaultOpts, opts);

    // Run ESLint
    return gulp.src(src)
      .pipe(eslint(opts.eslint))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  }
}