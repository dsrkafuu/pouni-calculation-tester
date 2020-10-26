module.exports = {
  plugins: [
    {
      plugin: require('craco-antd'),
      options: {
        customizeTheme: {
          '@primary-color': '#7c91bd',
          '@border-radius-base': '3px',
        },
      },
    },
  ],
};
