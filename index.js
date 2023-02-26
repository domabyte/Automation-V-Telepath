const { Telegraf } = require("telegraf");
const dotenv = require("dotenv");
const tele = require("./open-ai/version1");
const generat =  require("./cohere-ai/generate");
const DalleGenerateImage = require("./open-ai/Dalle_generate_image");

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);


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
                generat.generate(query).then((data)=>{
                    ctx.reply(data);
                }).catch(err=>console.log(err));
                break;


 // For Generating ramdom image using Dalle
        case 'G':
            case 'g':
                DalleGenerateImage.GI(query).then((data)=>{
                    ctx.sendPhoto(data)
                }).catch(err=>console.log(err));  
                break;  
                   

        default:
            ctx.reply("Just ask question. Don't spam here!!");
            break;
    }
})

bot.launch();

