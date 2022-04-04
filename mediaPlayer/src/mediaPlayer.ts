class MediaPlayer {
    media: HTMLMediaElement;
    container: HTMLElement;
    plugins: Array < any >;
    constructor (
        {
            element,
            plugins = [],
        }
    ) {
        this.media = element;
        this.plugins = plugins;
        this.initPlayer();
        this.initPlugins();
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

    initPlayer () {
        this.container = document.createElement('div');
        this.container.classList.add('element-position-relative');
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }

    private initPlugins () {
        const { plugins } = this;
        plugins.forEach(plugin => plugin.run(this));
    }
}

export default MediaPlayer;