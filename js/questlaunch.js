let duration = 0;
audio.onloadedmetadata = function() {
    context.drawImage(img, 0, 0, width, height, 0, 0, canvas.width * scale, canvas.height * scale);

    console.log('duration: ' + audio.duration); //duration of audio
    duration = audio.duration;
    selectsprites();
    drawImage();
};

const l_time = 7.204;
const m_time = 3.2;
const s_time = 1.204;
const list = [];
const lname = 'images/spritesheets/LC';
const mname = 'images/spritesheets/MC';
const sname = 'images/spritesheets/SC';
const name_end = '.png';

function selectsprites() {
    let list_long = [];
    let list_medium = [];
    let list_short = [];

    let lcycle = Math.floor(duration / l_time);
    duration = duration - lcycle * l_time;
    let mcycle = Math.floor(duration / m_time);
    duration = duration - mcycle * m_time;
    let scycle = Math.ceil(duration / s_time);
    duration = duration - scycle * s_time;

    console.log('long cycle: ' + lcycle);
    console.log('medium cycle: ' + mcycle);
    console.log('short cycle: ' + scycle);
    // console.log('duration: ' + duration);

    for (let i = 0; i < lcycle; i++) {
        let num = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

        list_long.push(num);
    }

    for (let i = 0; i < mcycle; i++) {
        let num = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

        list_medium.push(num);
    }

    for (let j = 0; j < scycle; j++) {
        let num = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

        list_short.push(num);
    }

    console.log('long list: ' + list_long);
    console.log('medium list: ' + list_medium);
    console.log('short list: ' + list_short);
}


function makeList() {

}









let img = new Image();
img.src = 'images/spritesheets/MC1.png';
img.onload = function() {
    // console.log(img.width);
    // console.log(img.height);
    context.drawImage(img, 0, 0, width, height, 0, 0, canvas.width * scale, canvas.height * scale);
    // console.log("Count: " + frameCount + "\tY: " + frameYCount + "\tX: " + frameXCount);
};

// let sheetWidth = 2460;
// let sheetHeight = 2460;
// let sheetCols = 6;
// let sheetRows = 6;

let sheetWidth = 1640;
let sheetHeight = 1640;
let sheetCols = 4;
let sheetRows = 4;

// let sheetWidth = 1230;
// let sheetHeight = 820;
// let sheetCols = 3;
// let sheetRows = 2;

const ttlSheetFrames = sheetRows * sheetCols;
const width = sheetWidth / sheetCols;
const height = sheetHeight / sheetRows;

let canvas = document.querySelector('canvas');

function scale() {
    let scale;

    if (window.innerWidth < window.innerHeight) {
        scale = window.innerWidth / 820;
    } else {
        scale = window.innerHeight / 820;
    }
    // console.log(scale);
    canvas.width = width * scale;
    canvas.height = height * scale;
    canvas.style.marginLeft = 'calc(-205px * ' + scale + ')';
}
scale();

window.onresize = () => {
    scale();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, frameXCount, frameYCount, width, height, 0, 0, canvas.width, canvas.height);
};

let context = canvas.getContext('2d');

let frameCountttl = -1;
let frameCount = -1;
let frameXCount = 0;
let frameYCount = 0;

function updateFrame() {
    frameCount++;
    frameCountttl++;
    frameXCount = (frameCount % sheetCols) * width;

    if (frameCount % sheetCols == 0) {
        frameYCount = frameCount % ttlSheetFrames / sheetCols * height;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    console.log("Count: " + frameCount + "\tY: " + frameYCount + "\tX: " + frameXCount);
}

function drawImage() {
    updateFrame();
    context.drawImage(img, frameXCount, frameYCount, width, height, 0, 0, canvas.width, canvas.height);
}

let S = new Date();
let C = new Date();
// console.log(S);
let time = 0;
let T = setInterval(() => {
    C = new Date();
    time = (C - S) / 1000;
});

function animation() {
    S = new Date();
    let prevtime = 0;
    let play = setInterval(function() {
        drawImage();
        // frameCount % 15 == 0 && frameCount != 0
        if (!(frameCountttl < 15 + 6)) {
            clearInterval(play);
            clearInterval(T);
            T = setInterval(() => {
                C = new Date();
                time = (C - S) / 1000;
            });
            // console.log(C);
            console.log(time - prevtime);

            console.log(time);
            S = new Date();

            console.log("end");
            frameCount = -1;
            frameCountttl = -1;
            img.src = 'images/spritesheets/MC1.png';
            sheetWidth = 1640;
            sheetHeight = 1640;
            sheetCols = 4;
            sheetRows = 4;
        }
        if (frameCount == 15) {
            console.log(time);
            prevtime = time;
            frameCount = -1;
            img.src = 'images/spritesheets/SC1.png';
            sheetWidth = 1230;
            sheetHeight = 820;
            sheetCols = 3;
            sheetRows = 2;
        }

    }, 200);
}

function play_text() {
    console.log("start");
    animation();
    audio.onended = function() {
        console.log("audio end");
    }

    audio.play();

}