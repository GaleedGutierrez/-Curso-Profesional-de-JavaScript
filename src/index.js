"use strict";
exports.__esModule = true;
var mediaPlayer_js_1 = require("./mediaPlayer.js");
var AutoPlay_js_1 = require("./plugins/AutoPlay.js");
var AutoPause_js_1 = require("./plugins/AutoPause.js");
var soundVideo = function (player) { return player.soundVideo(); };
var tooglePlay = function (player) { return player.tooglePlay(); };
var video = document.querySelector('video');
var playButton = document.querySelector('#playButton');
var muteButton = document.getElementById('muteButton');
var player = new mediaPlayer_js_1["default"]({
    element: video,
    plugins: [new AutoPlay_js_1["default"](), new AutoPause_js_1["default"]()]
});
muteButton.onclick = function () { return soundVideo(player); };
playButton.onclick = function () { return tooglePlay(player); };
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./../sw.js')["catch"](function (error) { return console.log(error); });
}
