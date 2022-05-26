import { Config } from '@stencil/core';
import { JsonDocs } from '@stencil/core/internal';

export const config: Config = {
  namespace: 'test-repro',
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
    },
    {
      type: 'docs-custom',
      generator: (docs: JsonDocs) => {
        docs.components.forEach(component => {
            console.log(component.tag, component.slots.length);
        });
      }
    }
  ],
};
