class ConfigGenerator
{
  constructor(rollupConfig)
  {
    this.rollupConfig = rollupConfig;
  }

  getRollupConfig()
  {
    return {
      input:   this.rollupConfig.getInputPath(),
      output:  this.rollupConfig.getOutput(),
      plugins: this.rollupConfig.getPlugins()
    };
  }
}

module.exports = function (rollupConfig)
{
  const generator = new ConfigGenerator(rollupConfig);
  return generator.getRollupConfig();
};
