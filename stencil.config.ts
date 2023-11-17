import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'fm-web-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: 'loader',
    },
    {
      type: 'dist-custom-elements',
      copy: [
        {
          src: '**/*.{jpg,png,svg}',
          dest: 'dist/components/assets',
          warn: true,
        },
      ],
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '@clarerodev/fm-web-components',
      outputType: 'component',
      directivesProxyFile: 'components.ts',
      directivesArrayFile: 'index.ts',
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
};
