import MediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';
var soundVideo = function (player) { return player.soundVideo(); };
var tooglePlay = function (player) { return player.tooglePlay(); };
var video = document.querySelector('video');
var playButton = document.querySelector('#playButton');
var muteButton = document.getElementById('muteButton');
var player = new MediaPlayer({
    element: video,
    plugins: [new AutoPlay(), new AutoPause()]
});
muteButton.onclick = function () { return soundVideo(player); };
playButton.onclick = function () { return tooglePlay(player); };
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./../sw.js')["catch"](function (error) { return console.log(error); });
}
