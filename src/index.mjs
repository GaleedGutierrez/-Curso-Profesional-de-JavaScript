import MediaPlayer from './mediaPlatyer.mjs';
import AutoPlay from './plugins/AutoPlay.mjs';

const soundVideo = player => player.soundVideo();
const tooglePlay = player => player.tooglePlay();

const video = document.querySelector('video');
const button = document.querySelector('button');
const buttonMuteUnmute = document.getElementById('buttonMuteUnmute');
const player = new MediaPlayer(
    {
        element: video,
        // plugins: [new AutoPlay()],
    }
);

buttonMuteUnmute.onclick = () => soundVideo(player);
button.onclick = () => tooglePlay(player);