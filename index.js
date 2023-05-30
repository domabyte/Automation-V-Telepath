const { Telegraf } = require("telegraf");
const dotenv = require("dotenv");
const tele = require("./open-ai/GPT");
const cohere =  require("./cohere-ai/cohere");
const DalleImage = require("./open-ai/DALLE_AI");
const {spawn} = require("child_process");
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

console.log("Server initiated for Telegram Bot!!");

bot.start((ctx)=>ctx.reply('Welcome'));
bot.on('message',(ctx)=>{
    let texture = ctx.message.text;
    let splitTexture = texture.split(": ");
    let textCode = splitTexture[0];
    let query = splitTexture[1];

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

        default:
            ctx.reply("Just ask question. Don't spam here!!");
            break;
    }
})

bot.launch();