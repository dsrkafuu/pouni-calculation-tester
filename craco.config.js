module.exports = {
  plugins: [
    {
      plugin: require('craco-antd'),
      options: {
        customizeTheme: {
          '@primary-color': '#ff7a45',
          '@border-radius-base': '3px',
        },
      },
    },
  ],
};
