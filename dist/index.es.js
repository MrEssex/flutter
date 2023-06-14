import * as gulp from 'gulp';
import eslint from 'gulp-eslint-new';

function lintTask(src, opts) {
    if (opts === void 0) { opts = null; }
    return function () {
        // Default options
        var defaultOpts = {
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
        };
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
    };
}

export { lintTask };
