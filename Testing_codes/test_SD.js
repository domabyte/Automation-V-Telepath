const {spawn} = require("child_process");

const query = "A digital illustration of a steampunk library with clockwork machines, 4k, detailed, trending in artstation, fantasy vivid colors";

const response = spawn('python',['../py_modules/Stable Diffusion/able_diffusion.py',query]);

response.stdout.on('data',(data)=>{
    console.log(data.toString());
})
