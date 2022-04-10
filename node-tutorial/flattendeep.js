//installing package json
//all dependencies are stored in node_modules like lodash, bootstrap
//npm init (step by step)
//npm init -y installs every default package for json

const { flattenDeep } = require('lodash')
const_ =require('lodash')
const items=[1,[2,[3,[4]]]]
const newItems=flattenDeep(items)
console.log(newItems)
console.log("hellow peoples")