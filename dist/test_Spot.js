"use strict";

var fetch = require('isomorphic-unfetch');
var _require = require("spotify-url-info")(fetch),
  getDetails = _require.getDetails;
var child_process = require("child_process");
var link = "https://open.spotify.com/track/1brnLTvarI9D1hLP6z2Ar8?si=26accb87646d4af0";
getDetails(link).then(function (data) {
  child_process.execSync("spotify_dl -l ".concat(data.preview.link), {
    stdio: "inherit"
  });
}).then(function (data1) {
  console.log(data1);
});