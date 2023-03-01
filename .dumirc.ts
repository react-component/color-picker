// more config: https://d.umijs.org/config
import { defineConfig } from 'dumi';

const isProdSite =
  // 不是预览模式 同时是生产环境
  process.env.PREVIEW !== 'true' && process.env.NODE_ENV === 'production';

const name = 'color-picker';

export default defineConfig({
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: 'color-picker',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
  outputPath: '.doc',
  exportStatic: {},
  base: isProdSite ? `/${name}/` : '/',
  publicPath: isProdSite ? `/${name}/` : '/',
  styles: [
    `
      .markdown table {
        width: auto !important;
      }
    `,
  ],
  mfsu: {},
});
