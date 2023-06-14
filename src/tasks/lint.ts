import * as gulp from 'gulp';
import {GulpESLintOptions} from "gulp-eslint-new";
import {plugins} from '../helpers/plugins';

interface lintOptions {
  eslint: GulpESLintOptions;
}

export default function lintTask(src: string, opts: lintOptions = null): () => NodeJS.ReadWriteStream {
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
            ecmaVersion: 12,
            sourceType: 'module',
            ecmaFeatures: {
              jsx: true,
            }
          },
          rules: {
            "@typescript-eslint/no-unused-vars": "error",
            // to enforce using type for object type definitions, can be type or interface
            "@typescript-eslint/consistent-type-definitions": [
              "error",
              "type"
            ]
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
      .pipe(plugins.eslint(opts.eslint))
      .pipe(plugins.eslint.format())
      .pipe(plugins.eslint.failAfterError());
  }
}