const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // '@primary-color': '#1DA57A',
              // '@layout-header-background': 'rgb(81,83,145)',
              // '@menu-dark-color': 'rgb(81,83,145)',
              // '@card-head-background': '#4c697a'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};