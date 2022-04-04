import MediaPlayer from '../mediaPlayer.js'

class AutoPlay {
    run (player: MediaPlayer) {
        if (!player.media.muted) player.media.muted = true;
        player.play(player.media);
    }
}

export default AutoPlay;