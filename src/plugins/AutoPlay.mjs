class AutoPlay {
    run (player) {
        player.mute(player.media);
        player.play(player.media);
    }
}

export default AutoPlay;