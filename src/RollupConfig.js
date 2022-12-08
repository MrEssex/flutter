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
    this.outputs = [];
    this.plugins = [];
  }

  setInputFile(inputPath)
  {
    this.inputPath = inputPath;
  }

  setOutput(filename, filepath, options, minify = false)
  {
    if(minify)
    {
      this.outputs.push(Object.assign({
        file:    this.appendToFilename(filepath, '.min'),
        name:    this.appendToFilename(filename, '.min'),
        plugins: [terser()]
      }, options));
    }

    this.outputs.push(Object.assign({file: filepath, name: filename}, options));
  }

  getInputPath()
  {
    return this.inputPath;
  }

  getOutput()
  {
    return this.outputs;
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

  setTypescript(options = {})
  {
    this.plugins.push(typescript(options));
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

  appendToFilename(filename, string)
  {
    const dotIndex = filename.lastIndexOf('.');
    if(dotIndex === -1)
    {
      return filename + string;
    }
    else
    {
      return filename.substring(0, dotIndex) + string + filename.substring(dotIndex);
    }
  }
}

module.exports = RollupConfig;
