// more config: https://d.umijs.org/config
import { defineConfig } from 'dumi';

const basePath = process.env.GH_PAGES ? '/color-picker/' : '/';
const publicPath = basePath;

export default defineConfig({
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: 'color-picker',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
  outputPath: 'docs-dist',
  exportStatic: {},
  base: basePath,
  publicPath,
  styles: [
    `
      .markdown table {
        width: auto !important;
      }
    `,
  ],
  mfsu: {},
});
