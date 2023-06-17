"use strict";

var _require = require("child_process"),
  spawn = _require.spawn;
var query = "A digital illustration of a steampunk library with clockwork machines, 4k, hd, detailed, trending in artstation, fantasy vivid colors";
var response = spawn('python', ['../py_modules/stable_diffusion.py', query]);
// console.log(response);
response.stdout.on('data', function (data) {
  console.log("stdout: ".concat(data));
  console.log(data.toString());
});