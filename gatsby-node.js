const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src'),
      },
      extensions: ['', '.js', '.json'],
    },
  });
};
