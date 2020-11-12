const sveltePreprocess = require('svelte-preprocess');

module.exports = async ({ config }) => {
  const index = config.module.rules.findIndex(r =>
    r.loader && r.loader.includes('svelte-loader')
  );

  config.module.rules[index] = {
    test: /\.(html|svelte)$/,
    exclude: /node_modules/,
    use: {
      loader: 'svelte-loader',
      options: {
        emitCss: true,
        preprocess: sveltePreprocess(),
      },
    },
  }

  return config;
}
