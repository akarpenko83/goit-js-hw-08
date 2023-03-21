import Player from "@vimeo/player";
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

onload = () => {
    if (localStorage.getItem("videoplayer-current-time")) {
        player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
    }

};

player.on('timeupdate', throttle(storeTimeStamp, 1000));   

function storeTimeStamp({ seconds }) {
    localStorage.setItem("videoplayer-current-time", seconds);
}