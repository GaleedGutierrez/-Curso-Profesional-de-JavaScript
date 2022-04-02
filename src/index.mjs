import MediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.mjs';
import AutoPause from './plugins/AutoPause.js';

const soundVideo = player => player.soundVideo();
const tooglePlay = player => player.tooglePlay();

const video = document.querySelector('video');
const button = document.querySelector('button');
const buttonMuteUnmute = document.getElementById('buttonMuteUnmute');
const player = new MediaPlayer(
    {
        element: video,
        plugins: [new AutoPlay(), new AutoPause()],
    }
);

buttonMuteUnmute.onclick = () => soundVideo(player);
button.onclick = () => tooglePlay(player);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./../sw.js')
        .catch(error => console.log(error));
}