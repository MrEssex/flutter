const resolve = require('@rollup/plugin-node-resolve');
const typescript = require('rollup-plugin-typescript2');
const commonJs = require('@rollup/plugin-commonjs');
const postcss = require('rollup-plugin-postcss');
const sveltePreprocess = require('svelte-preprocess');
const svelte = require('rollup-plugin-svelte');
const json = require('@rollup/plugin-json');
const copy = require('rollup-plugin-copy');
const terser = require('@rollup/plugin-terser');

class RollupConfig
{
  constructor()
  {
    this.inputPath = null;
    this.output = {};
    this.plugins = [];
  }

  setInputFile(inputPath)
  {
    this.inputPath = inputPath;
  }

  setOutput(filename, filepath, options)
  {
    this.output = Object.assign({file: filepath, name: filename}, options);
  }

  getInputPath()
  {
    return this.inputPath;
  }

  getOutput()
  {
    return this.output;
  }

  getPlugins()
  {
    return this.plugins;
  }

  setResolve(dedupe = [])
  {
    this.plugins.push(resolve({browser: true, preferBuiltins: true, dedupe}));
  }

  setCommonJs(options = {})
  {
    this.plugins.push(commonJs(options));
  }

  setTypescript()
  {
    this.plugins.push(typescript());
  }

  setPostCss(options = {})
  {
    const o = Object.assign(options, {extract: true});
    this.plugins.push(postcss(o));
  }

  setSvelte(options = {})
  {
    const o = Object.assign(options, {preprocess: sveltePreprocess(), emitCss: true});
    this.plugins.push(svelte(o));
  }

  setJson()
  {
    this.plugins.push(json());
  }

  setCopy(options = {})
  {
    this.plugins.push(copy(options));
  }

  setTerser(options = {})
  {
    this.plugins.push(terser(options))
  }
}

module.exports = RollupConfig;
