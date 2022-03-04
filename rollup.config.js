import summary from 'rollup-plugin-summary';
import {terser} from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2'
import litTailwind from 'rollup-plugin-lit-tailwindcss3';

export default {
  input: "src/index.ts",
  output: [{
    file: 'dist/index.js',
    format: 'esm',
    sourcemap: true
  }],

  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    typescript(),
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
    })
  ],
};
