"use strict";
exports.__esModule = true;
var AutoPause = /** @class */ (function () {
    function AutoPause() {
        this.config = { threshold: 0.25 };
        this.titleDOM = '';
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handleVisibilitychange = this.handleVisibilitychange.bind(this);
    }
    AutoPause.prototype.run = function (player) {
        this.player = player;
        this.titleDOM = document.title;
        var _a = this, config = _a.config, handlerIntersection = _a.handlerIntersection, handleVisibilitychange = _a.handleVisibilitychange;
        var observer = new IntersectionObserver(handlerIntersection, config);
        observer.observe(player.media);
        document.addEventListener("visibilitychange", handleVisibilitychange);
    };
    AutoPause.prototype.handlerIntersection = function (entries) {
        var _a = this, player = _a.player, config = _a.config;
        var entry = entries[0];
        var isVisible = entry.intersectionRatio >= config.threshold;
        isVisible ? player.media.play() : player.media.pause();
    };
    AutoPause.prototype.handleVisibilitychange = function () {
        var _a = this, player = _a.player, titleDOM = _a.titleDOM;
        var isVisible = document.visibilityState === 'visible';
        // const isVisible = document.hidden;
        // !isVisible ? player.play() : player.pause();
        if (isVisible) {
            player.media.play();
            document.title = titleDOM;
        }
        else {
            player.media.pause();
            document.title = '¡Sigue viendo! :D';
        }
    };
    return AutoPause;
}());
exports["default"] = AutoPause;
