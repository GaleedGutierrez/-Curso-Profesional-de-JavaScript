class MediaPlayer {
    constructor (
        {
            element,
            plugins = [],
        }
    ) {
        this.media = element;
        this.plugins = plugins;
        if (plugins.length !== 0) this.#initPlugins();
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
        const { plugins, media } = this;

        const player = {
            media,
            play: () => this.play(media),
            pause: () => this.pause(media),
            get muted() { return media.muted; },
            set muted(value) { media.muted = value; },
        };

        plugins.forEach(plugin => plugin.run(player));
    }
}

export default MediaPlayer;