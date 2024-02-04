import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'leostar-ui',
  autoprefixCss: true,
  plugins: [
    postcss({
      plugins: [autoprefixer()]
    }),
    sass({
      injectGlobalPaths: [
        'src/globals/var.scss',
        'src/globals/mixins.scss'
      ]
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    }
  ],
  testing: {
    browserHeadless: "new",
  },
};
