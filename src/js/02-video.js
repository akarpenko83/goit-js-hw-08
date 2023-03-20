import Player from "@vimeo/player";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


// iframe.addEventListener('timeupdate', onTimeUpdate);


player.on('play', function() {
console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

player.on('timeupdate', function ({ seconds }) {
    
});