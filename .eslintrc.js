module.exports = {
  "extends": "airbnb-base",
  "parser": "babel-eslint",
  "globals" : {
    "Page": true,
    "App": true,
    "wx" : true,
    "getApp":true,
    "NODE_ENV":true,
  },
  "plugins": [
    'html'
  ],
  "rules" : {
    // "global-require": 0,
    "indent": [0, "tab"], // 去掉tab约定,IDE会有问题
    "func-names": 0,
    "new-cap": ["error", { "capIsNew": false }],
    "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
    "no-param-reassign": ["error", { "props": false }]
  },
};
