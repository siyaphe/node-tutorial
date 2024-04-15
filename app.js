//npm -global command
//npm --version

// local dependency - use it only in this particular project
// npm i packageNAME

// GLOBAL dependency - use it in any project
//npm install -g packageName
//sudo npm install -g packageName -> (mac)

// package.json - manisfest file(stores important info about package)
// manual approach(create package.json in the root, create properties etc)
// npm init (step by step, press Enter to skip)
//npm init -y (default)

const _ = require('lodash')
//flat arrays
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
