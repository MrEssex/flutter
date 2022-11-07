# Flutter


Example using all options:

rollup.config.js
```js
import Flutter from 'flutter';
import postcssComments from 'postcss-discard-comments';
import autoprefixer from 'autoprefixer';

const plugins = [
  postcssComments({removeAll: true}),
  autoprefixer()
];

Flutter
  .setInputPath('assets/entry.ts')
  .setOutputPath('main.js', 'resources/main.min.js')
  .typescript()
  .resolve()
  .commonJs()
  .copy({
    targets: [
      {src: 'assets/font/*', dest: 'resources/font'},
      {src: 'assets/img/*', dest: 'resources/img'}
    ]
  })
  .postCss({plugins: plugins});

export default Flutter.getRollupConfig();

```


Svelte example
rollup.config.js
```js
import Flutter from 'flutter';
import postcssComments from 'postcss-discard-comments';
import autoprefixer from 'autoprefixer';

const plugins = [
  postcssComments({removeAll: true}),
  autoprefixer()
];

Flutter
  .setInputPath('assets/entry.ts')
  .setOutputPath('main.js', 'resources/main.min.js', {inlineDynamicImports: true})
  .typescript()
  .svelte()
  .json()
  .resolve()
  .commonJs()
  .copy({
    targets: [
      {src: 'assets/font/*', dest: 'resources/font'},
      {src: 'assets/img/*', dest: 'resources/img'}
    ]
  })
  .postCss({plugins: plugins});

export default Flutter.getRollupConfig();

```


