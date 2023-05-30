const fetch = require('isomorphic-unfetch');
const {getDetails} = require("spotify-url-info")(fetch);
const child_process = require("child_process");

const link = "https://open.spotify.com/track/1brnLTvarI9D1hLP6z2Ar8?si=26accb87646d4af0";

getDetails(link).then((data)=>{
    child_process.execSync(`spotify_dl -l ${data.preview.link}`,{stdio : "inherit"})
}).then((data1)=>{
    console.log(data1);
})