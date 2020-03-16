import resolve from '@rollup/plugin-node-resolve';
import commonJs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { name, homepage, version } from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      format: 'umd',
      name: '__my_global_var_name__',
      file: `dist/${name}.js`,
      sourcemap: true,
      banner: `// Version ${version} ${name} - ${homepage}`
    }
  ],
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    resolve(),
    commonJs()
  ]
};