(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('gulp'), require('gulp-eslint-new')) :
    typeof define === 'function' && define.amd ? define(['exports', 'gulp', 'gulp-eslint-new'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.index = global.index || {}, global.index.cjs = global.index.cjs || {}, global.index.cjs.js = {}), global.gulp, global.eslint));
})(this, (function (exports, gulp, eslint) { 'use strict';

    function _interopNamespaceDefault(e) {
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n.default = e;
        return Object.freeze(n);
    }

    var gulp__namespace = /*#__PURE__*/_interopNamespaceDefault(gulp);

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
            return gulp__namespace.src(src)
                .pipe(eslint(opts.eslint))
                .pipe(eslint.format())
                .pipe(eslint.failAfterError());
        };
    }

    exports.lintTask = lintTask;

}));
