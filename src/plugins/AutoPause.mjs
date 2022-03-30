class AutoPause {
    constructor () {
        this.config = {threshold: 0.25};
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handleVisibilitychange = this.handleVisibilitychange.bind(this);
    }

    run (player) {
        this.player = player;
        this.titleDOM = document.title;
        const { config, handlerIntersection, handleVisibilitychange } = this;
        const observer = new IntersectionObserver(handlerIntersection, config);
        observer.observe(player.media)

        document.addEventListener("visibilitychange", handleVisibilitychange);
    }

    handlerIntersection (entries) {
        const { player, config } = this;
        const entry = entries[0];
        const isVisible = entry.intersectionRatio >= config.threshold;
        isVisible ? player.play() : player.pause();
    }

    handleVisibilitychange () {
        const { player, titleDOM } = this;
        // const isVisible = document.visibilityState === 'visible';
        const isVisible = document.hidden;
        // isVisible ? player.play() : player.pause();
        if (!isVisible) {
            player.play();
            document.title = titleDOM;
        } else {
            player.pause();
            document.title = '¡Sigue viendo! :D';
        }
    }
}

export default AutoPause;