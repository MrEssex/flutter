import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';

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
    return gulp.src(src)
        .pipe(plugins.eslint(opts.eslint))
        .pipe(plugins.eslint.format())
        .pipe(plugins.eslint.failAfterError());
}

export { lintTask };
