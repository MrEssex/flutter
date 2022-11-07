class ConfigGenerator
{
  constructor(rollupConfig)
  {
    this.rollupConfig = rollupConfig;
  }

  getRollupConfig()
  {
    const config = {
      input:   this.rollupConfig.getInputPath(),
      output:  this.rollupConfig.getOutput(),
      plugins: this.rollupConfig.getPlugins()
    };

    return config;
  }
}

module.exports = function (rollupConfig)
{
  const generator = new ConfigGenerator(rollupConfig);
  return generator.getRollupConfig();
};
