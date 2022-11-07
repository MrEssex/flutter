const RollupConfig = require('./src/RollupConfig');
const ConfigGenerator = require('./src/ConfigGenerator');

const rollupConfig = new RollupConfig();

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

  setOutputPath(filename, filepath, options)
  {
    rollupConfig.setOutput(filename, filepath, options);
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

  typescript()
  {
    rollupConfig.setTypescript();
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
