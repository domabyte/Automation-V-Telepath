const {spawn} = require("child_process");

const query = "A digital illustration of a steampunk library with clockwork machines, 4k, hd, detailed, trending in artstation, fantasy vivid colors";

const response = spawn('python',['../py_modules/stable_diffusion.py',query]);
// console.log(response);
response.stdout.on('data',(data)=>{
    console.log(`stdout: ${data}`);

    console.log(data.toString());
})
