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
          '@font-family':
            "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', 'Arial', 'Helvetica Neue', 'Helvetica', 'PingFang SC', 'Hiragino Sans GB', 'Source Han Sans CN', 'Source Han Sans SC', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif",
        },
      },
    },
  ],
};
