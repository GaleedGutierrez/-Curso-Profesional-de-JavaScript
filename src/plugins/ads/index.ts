import MediaPlayer from '../../mediaPlayer.js';
import Ads, { Ad }  from './Ads.js';

class AdsPlugins {
    private ads: Ads;
    private player: MediaPlayer;
    private media: HTMLMediaElement;
    private currentAd: Ad;

    constructor () {
        this.ads = Ads.getInstance();
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }

    run (player: MediaPlayer) {
        this.player = player;
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handleTimeUpdate);
    }

    private handleTimeUpdate () {
        const currentTime = Math.floor(this.media.currentTime);
        if (currentTime % 30 === 0) this.renderAd();
    }

    private renderAd () {
        if (this.currentAd) return;
        const ad = this.ads.getAD();
        this.currentAd = ad;
        console.log(ad);
    }
}

export default AdsPlugins;