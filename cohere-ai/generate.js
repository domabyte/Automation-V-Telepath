const cohere = require('cohere-ai');

cohere.init(process.env.COHERE_API_KEY)

async function generateTxt(txt){
    const response = await cohere.generate({
    model: 'xlarge',
    prompt: txt,
    max_tokens: 600,
    temperature: 0.3,
    k: 0,
    p: 1.0,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    stop_sequences: [],
    return_likelihoods: 'NONE'
  });
    return response.body.generations[0].text;
}

module.exports = {
    generate: generateTxt
}