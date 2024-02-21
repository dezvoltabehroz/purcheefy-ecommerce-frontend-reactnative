module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          assets: './src/assets',
          screens: './src/screens',
          components: './src/components',
          navigation: './src/navigation',
          hooks: './src/hooks',
          store: './src/store', // Redux Store
          utils: './src/utils',
          data: './src/data',
          locales: './src/locales',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
