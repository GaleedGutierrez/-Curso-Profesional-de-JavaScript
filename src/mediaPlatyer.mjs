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
            play: () => this.play(this.media),
            pause: () => this.pause(this.media),
            get muted() { return this.media.muted; },
            set muted(value) { this.media.muted = value; },
        };

        plugins.forEach(plugin => plugin.run(player));
    }
}

export default MediaPlayer;