// don't open the browser during development
process.env.BROWSER = 'none';

module.exports = {
  plugins: [
    {
      plugin: require('craco-antd'),
      options: {
        customizeTheme: {
          '@primary-color': '#ff7a45',
          '@border-radius-base': '3px',
          '@pagination-font-weight-active': 600,
          '@font-family':
            "-apple-system, BlinkMacSystemFont, 'PingFang SC', 'SF Pro Text', sans-serif",
        },
      },
    },
  ],
};
