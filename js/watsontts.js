// Connect to ibm tts server
const TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');

// Replace with YOUR resource service credentials
const textToSpeech = new TextToSpeechV1({
    iam_apikey: 'kNPJJd8M4TXqVqHHL5S-KHI9-oX30jkE2CHFHZvqKviv',
    url: 'https://stream.watsonplatform.net/text-to-speech/api',
    headers: {
        'X-Watson-Learning-Opt-Out': 'true'
    }
});

textToSpeech.listVoices()
    .then(voices => {
        console.log(JSON.stringify(voices, null, 2));
    })
    .catch(err => {
        console.log('error:', err);
    });

const AUDIO_FORMAT = 'audio/wav';

let http = require('http');
let fs = require('fs');
let port = process.env.PORT || 8080

let server = http.createServer((request, response) => {
    request.on("data", function(data) {
        data = JSON.parse(data);
        let synthesizeParams = {
            text: data.text,
            accept: AUDIO_FORMAT,
            voice: 'en-US_AllisonVoice',
        }
        textToSpeech.synthesize(synthesizeParams)
            .then(audio => {
                // response.writeHead(200, {
                //     'Content-Type': AUDIO_FORMAT,
                //     'Access-Control-Allow-Origin': '*'
                // });
                audio.pipe(fs.createWriteStream('test.wav'));
            })
            .catch(err => {
                console.log('error:', err);
            });
    });

});

server.listen(port, () => {
    console.log('listening...');
});