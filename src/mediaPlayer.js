var MediaPlayer = /** @class */ (function () {
    function MediaPlayer(_a) {
        var element = _a.element, _b = _a.plugins, plugins = _b === void 0 ? [] : _b;
        this.media = element;
        this.plugins = plugins;
        this.initPlugins();
    }
    MediaPlayer.prototype.tooglePlay = function () {
        var _a = this, media = _a.media, play = _a.play, pause = _a.pause;
        media.paused ? play(media) : pause(media);
    };
    MediaPlayer.prototype.soundVideo = function () {
        var _a = this, media = _a.media, mute = _a.mute, unmute = _a.unmute;
        media.muted ? unmute(media) : mute(media);
    };
    MediaPlayer.prototype.play = function (media) { media.play(); };
    MediaPlayer.prototype.pause = function (media) { media.pause(); };
    MediaPlayer.prototype.mute = function (media) { media.muted = true; };
    MediaPlayer.prototype.unmute = function (media) { media.muted = false; };
    MediaPlayer.prototype.initPlugins = function () {
        var _this = this;
        var plugins = this.plugins;
        plugins.forEach(function (plugin) { return plugin.run(_this); });
    };
    return MediaPlayer;
}());
export default MediaPlayer;
