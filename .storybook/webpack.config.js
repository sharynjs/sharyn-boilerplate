module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.resolve = {
    ...defaultConfig.resolve,
    alias: { ...defaultConfig.resolve.alias, joi: 'joi-browser' },
  }
  return defaultConfig
}
