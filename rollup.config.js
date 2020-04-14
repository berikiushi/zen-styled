import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs',
  },
  external: ['styled-components'],
  plugins: [
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
  ],
};
