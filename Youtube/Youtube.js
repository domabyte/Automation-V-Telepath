const fs = require('fs');
// const { getURLVideoID } = require('ytdl-core');
const ytdl = require('ytdl-core');


async function Ytvideo(url){
  const videoURL = url;
  const filePath = './video.mp4';
  
  const downloadStream = ytdl(videoURL, { quality: 'highest' });
  const writeStream = fs.createWriteStream(filePath);
  
  downloadStream.pipe(writeStream);
  
  writeStream.on('finish', () => {
    console.log('Video downloaded successfully!');
  });
  
  writeStream.on('error', (err) => {
    console.error('Error saving the video:', err);
  });
 
  url =""
  console.log("di")
    
}   


module.exports ={
    YT : Ytvideo
}
