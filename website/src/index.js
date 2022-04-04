import MediaPlayer from './mediaPlayer.js.js';
import AutoPlay from './plugins/AutoPlay.js.js';
import AutoPause from './plugins/AutoPause.js.js';
import Ads from './plugins/ads/index.js.js';
const soundVideo = player => player.soundVideo();
const tooglePlay = player => player.tooglePlay();
const video = document.querySelector('video');
const playButton = document.querySelector('#playButton');
const muteButton = document.getElementById('muteButton');
const player = new MediaPlayer({
    element: video,
    plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});
muteButton.onclick = () => soundVideo(player);
playButton.onclick = () => tooglePlay(player);
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./../sw.js')
        .catch(error => console.log(error));
}
