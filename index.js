const RollupConfig = require('./src/RollupConfig');
const ConfigGenerator = require('./src/ConfigGenerator');

const rollupConfig = new RollupConfig();
const production = !process.env.ROLLUP_WATCH || process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'dev';

module.exports = {
  getRollupConfig()
  {
    return ConfigGenerator(rollupConfig);
  },

  setInputPath(inputFile)
  {
    rollupConfig.setInputFile(inputFile);
    return this;
  },

  setOutputPath(filename, filepath, options = {}, minify = false)
  {
    rollupConfig.setOutput(filename, filepath, options, minify);
    return this;
  },

  resolve(dedupe)
  {
    rollupConfig.setResolve(dedupe);
    return this;
  },

  commonJs(options = {})
  {
    rollupConfig.setCommonJs(options);
    return this;
  },

  typescript(options = {})
  {
    rollupConfig.setTypescript(options);
    return this;
  },

  postCss(options = {})
  {
    rollupConfig.setPostCss(options);
    return this;
  },

  svelte(options = {})
  {
    rollupConfig.setSvelte(options);
    return this;
  },

  json()
  {
    rollupConfig.setJson();
    return this;
  },

  copy(options)
  {
    rollupConfig.setCopy(options);
    return this;
  }
};
