import MediaPlayer from '@galeedgutierrez/platzimediaplayer/src/mediaPlayer.js';
import AutoPlay from '@galeedgutierrez/platzimediaplayer/src/plugins/AutoPlay.js';
import AutoPause from '@galeedgutierrez/platzimediaplayer/src/plugins/AutoPause.js';
import Ads from '@galeedgutierrez/platzimediaplayer/src/plugins/ads/index.js';

const soundVideo = player => player.soundVideo();
const tooglePlay = player => player.tooglePlay();

const video = document.querySelector('video');
const playButton: HTMLElement = document.querySelector('#playButton');
const muteButton: HTMLElement = document.getElementById('muteButton');
const player = new MediaPlayer(
    {
        element: video,
        plugins: [new AutoPlay(), new AutoPause(), new Ads()],
    }
);

muteButton.onclick = () => soundVideo(player);
playButton.onclick = () => tooglePlay(player);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./../sw.js')
        .catch(error => console.log(error));
}