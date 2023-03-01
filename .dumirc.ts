// more config: https://d.umijs.org/config
import { defineConfig } from 'dumi';

const name = 'mentions';

export default defineConfig({
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: 'rc-mentions',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
  outputPath: '.doc',
  exportStatic: {},
  base: `/${name}/`,
  publicPath: `/${name}/`,
  styles: [
    `
      .markdown table {
        width: auto !important;
      }
    `,
  ],
  mfsu: {},
});
