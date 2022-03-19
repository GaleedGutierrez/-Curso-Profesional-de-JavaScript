class MediaPlayer {
    constructor (config) {
        this.media = config.element;
    }

    tooglePlay () {
        const { media, play, pause } = this;
        media.paused ? play(media) : pause(media);
    }

    play (media) { media.play() }

    pause (media) { media.pause() }
}

export default MediaPlayer;