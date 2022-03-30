import MediaPlayer from './mediaPlatyer.mjs';
import AutoPlay from './plugins/AutoPlay.mjs';
import AutoPause from './plugins/AutoPause.mjs';

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