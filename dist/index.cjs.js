'use strict';

var gulp = require('gulp');

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

var plugins = gulpLoadPlugins({
    pattern: ['gulp-*', 'gulp.*'],
    config: 'package.json',
    scope: ['dependencies', 'devDependencies', 'peerDependencies'],
    replaceString: /^gulp(-|\.)/,
    camelize: true,
    lazy: true,
    rename: {}
});
function lintTask(src, opts) {
    if (opts === void 0) { opts = null; }
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
    // Merge default options with user options
    opts = Object.assign({}, defaultOpts, opts);
    // Run ESLint
    return gulp__namespace.src(src)
        .pipe(plugins.eslint(opts.eslint))
        .pipe(plugins.eslint.format())
        .pipe(plugins.eslint.failAfterError());
}

exports.lintTask = lintTask;
