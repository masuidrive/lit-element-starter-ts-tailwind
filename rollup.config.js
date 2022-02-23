/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import summary from 'rollup-plugin-summary';
import {terser} from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import litTailwind from '@takanorip/rollup-plugin-lit-tailwindcss';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/my-elements.bundled.js',
    format: 'esm',
    exports: "named",
    sourcemap: 'inline',
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    typescript({
      sourceMap: true,
      declaration: true,
      rootDir: "src",
      declarationDir: "dist",
    }),
    replace({'Reflect.decorate': 'undefined'}),
    resolve(),
    terser({
      ecma: 2017,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    summary(),
    litTailwind({
      include: 'src/**/*.ts',
      exclude: undefined,
      placeholder: '__tw_placeholder__',
    }),
  ],
};
