class MediaPlayer {
    constructor (config) {
        this.media = config.element;
    }

    play () {
        const { media } = this;
        media.play()
    }
}

const video = document.querySelector('video');
const button = document.querySelector('button');
const player = new MediaPlayer({element: video});

button.onclick = () => player.play();