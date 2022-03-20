class MediaPlayer {
    constructor (
        {
            element,
            plugins = [],
        }
    ) {
        this.media = element;
        this.plugins = plugins;
        this.#initPlugins();
    }

    tooglePlay () {
        const { media, play, pause } = this;
        media.paused ? play(media) : pause(media);
    }

    soundVideo () {
        const { media, mute, unmute } = this;
        media.muted ? unmute(media) : mute(media);
    }

    play (media) { media.play() }

    pause (media) { media.pause() }

    mute (media) { media.muted = true }

    unmute (media) { media.muted = false }

    #initPlugins () {
        const { plugins } = this ;
        plugins.forEach(plugin => plugin.run(this));
    }
}

export default MediaPlayer;