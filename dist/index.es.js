import*as e from"gulp";import n from"gulp-load-plugins";var s=n({pattern:["gulp-*","gulp.*"],scope:["dependencies","devDependencies","peerDependencies"],replaceString:/^gulp(-|\.)/,camelize:!0,lazy:!0,rename:{}});function r(n,r){return void 0===r&&(r=null),function(){var t={eslint:{baseConfig:{extends:["eslint:recommended"],env:{browser:!0,node:!0,es6:!0},parserOptions:{ecmaVersion:12,sourceType:"module",ecmaFeatures:{jsx:!0}},rules:{"@typescript-eslint/no-unused-vars":"error","@typescript-eslint/consistent-type-definitions":["error","type"]}}}};return n.indexOf(".ts")>-1&&(t=Object.assign({},t,{eslint:{baseConfig:{extends:["eslint:recommended","plugin:@typescript-eslint/recommended"],parser:"typescript-eslint-parser",plugins:["@typescript-eslint"],root:!0}}})),r=Object.assign({},t,r),e.src(n).pipe(s.eslintNew(r.eslint)).pipe(s.eslintNew.format()).pipe(s.eslintNew.failAfterError())}}export{r as lintTask};
