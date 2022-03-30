class AutoPause {
    constructor () {
        this.config = {threshold: 0.25};
        this.handlerIntersection = this.handlerIntersection.bind(this);
    }

    run (player) {
        this.player = player;
        const { config, handlerIntersection } = this;
        const observer = new IntersectionObserver(handlerIntersection, config);
        observer.observe(player.media)
    }

    handlerIntersection (entries) {
        const { player, config } = this;
        const entry = entries[0];
        (entry.intersectionRatio >= config.threshold)
            ? player.play()
            : player.pause();
    }
}

export default AutoPause;