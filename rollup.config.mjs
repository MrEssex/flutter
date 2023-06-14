import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import pkg from './package.json' assert {type: "json"};

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'index.cjs.js',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript(),
    terser(),
  ],
};
