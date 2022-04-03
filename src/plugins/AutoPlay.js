class AutoPlay {
    run(player) {
        if (!player.media.muted)
            player.media.muted = true;
        player.play(player.media);
    }
}
export default AutoPlay;
