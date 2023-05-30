const { Telegraf } = require("telegraf");
const dotenv = require("dotenv");
const tele = require("./open-ai/GPT");
const cohere =  require("./cohere-ai/cohere");
const DalleImage = require("./open-ai/DALLE_AI");
const {spawn} = require("child_process");
const YTV = require("./Youtube/Youtube");
const fs = require('fs');

dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN);

console.log("Server initiated for Telegram Bot!!");

bot.start((ctx)=>ctx.reply('Welcome'));
// bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.on('message',(ctx)=>{
    let texture = ctx.message.text;
    let splitTexture = texture.split(": ");
    let textCode = splitTexture[0];
    let query = splitTexture[1];
    console.log("query");
    switch(textCode){

// For Query using open-ai
        case 'Q':
            case 'q':
                tele.teleV(query).then((data)=>{
                    ctx.reply(data);
                }).catch(err=>console.log(err));
                break;

        case 'C':
            case 'c':
                cohere.generate(query).then((data)=>{
                    ctx.reply(data);
                }).catch(err=>console.log(err));
                break;


 // For Generating image from text using Dalle-2
        case 'I1':
            case 'i1':
                DalleImage.GI(query).then((data)=>{
                    ctx.sendPhoto(data);
                }).catch(err=>console.log(err));  
                break;  

 // For Generating image from text using stable-diffusion
        case 'I2':
            case 'i2':
                    const response =  spawn('python',['./py_modules/Stable Diffusion/stable_diffusion.py',query]);
                    response.stdout.on('data',(data)=>{
                        const result = data.toString();
                        const imgLink = result.split("'")[1];
                        ctx.sendPhoto(imgLink);
                    });
                    break;


        case 'Y':
            case 'y':
                YTV.YT(query).then((data)=>{
                    // Gonna add this soon
                    console.log(data);
                    // ctx.replyWithVideo('https://drop-and-down-vidoes.netlify.app/New%20folder/05.mp4');
                    ctx.replyWithVideo('http://localhost:5500/videos/video.mp4?random=58')
                    
                // ctx.replyWithVideo('http://localhost:4000/Videos/video.mp4')
                // ctx.sendVideo('https://automation-v-telepath/Videos/video.mp4');

                //     fs.unlinkSync('http://127.0.0.1:5500/Automation/Automation-V-Telepath/Videos/video.mp4',()=>{
                //         if(err) console.log(err);
                //    else console.log("file deleted !!")
                        
                //       })
                  
                }).catch(err=>console.log(err));
                break;


// chat gpt modal 3.5
        case 'G':
            case 'g':
                // console.log("i am here")
                const resgpt = spawn('python', ['./open-ai/Gptpy.py', query]);
                resgpt.stdout.on('data',(data)=>{
                    // console.log(data);
                    const result = data.toString();
                    const rep =  result.trim();
                    // console.log(rep);
                    // const rep = result.split("'")[1];
                    ctx.reply(result);
                })
                break;      


        default:
            ctx.reply("Just ask question. Don't spam here!!");
            break;
    }
})

bot.launch();
