import Player from '@vimeo/player';
import trottle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', trottle((data) => {
    // console.log(data.seconds)
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds))
}, 1000))

window.addEventListener('load', () => {
    const playerTime = localStorage.getItem("videoplayer-current-time")
    // console.log(playerTime);
    if (playerTime) {
        player.setCurrentTime(playerTime);
    } else {
        localStorage.removeItem("videoplayer-current-time")
    }
})
