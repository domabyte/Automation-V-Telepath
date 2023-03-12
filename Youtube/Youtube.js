const fs = require('fs');
// const { getURLVideoID } = require('ytdl-core');
const ytdl = require('ytdl-core');

async function Ytvideo(url){
 
    console.log("di")
 
    // ytdl(url)
  // .pipe(fs.createWriteStream('./Videos/video.mp4'));

  // console.log(fs.readFile('video.mp4'))
  // return fs.readFile('video.mp4')
  // return "78";
  url =""
  console.log("di")
    
}


module.exports ={
    YT : Ytvideo
}
