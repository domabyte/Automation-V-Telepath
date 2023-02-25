
const cohere = require('cohere-ai');

cohere.init(process.env.COHERE_API_KEY)

async function generateTxt(txt){

    const response = await cohere.generate({
        prompt : txt
    })
   
    return JSON.stringify(response)
}


module.exports = {
    generate: generateTxt
}