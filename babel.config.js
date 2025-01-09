module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '~apis': './src/apis',
          '~assets': './src/assets',
          '~components': './src/components',
          '~constants': './src/constants',
          '~hooks': './src/hooks',
          '~navigation': './src/navigation',
          '~providers': './src/providers',
          '~screens': './src/screens',
          '~styles': './src/styles',
          '~types': './src/types',
          '~utils': './src/utils',
          '~': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
