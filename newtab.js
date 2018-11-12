let messages = [
    "Yesterday you said tomorrow", 
    "Just do it!", 
    "Make your dreams become true!", 
    "Don't let your dreams, be dreams"
];
let title = document.getElementById('message-title').textContent = messages[getRandomInt(0,3)];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}       
