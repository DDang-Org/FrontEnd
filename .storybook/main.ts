import type { StorybookConfig } from '@storybook/react-native';

const main: StorybookConfig & {
  webpackFinal?: (config: any) => Promise<any>;
} = {
  stories: ['../src/components/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
  ],
  webpackFinal: async (config) => {
    if (config.module?.rules) {
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              native: true,
              dimensions: false,
              svgoConfig: {
                plugins: [
                  {
                    name: 'removeViewBox',
                    active: false
                  }
                ]
              }
            }
          }
        ]
      });
    }

    if (config.resolve?.extensions) {
      config.resolve.extensions.push('.svg');
    }

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          'react-native-svg': 'react-native-svg-web'
        }
      }
    };
  }
};

export default main;
