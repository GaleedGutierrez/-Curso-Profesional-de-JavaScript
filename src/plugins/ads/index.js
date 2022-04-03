import Ads from './Ads.js';
class AdsPlugins {
    ads;
    player;
    media;
    currentAd;
    constructor() {
        this.ads = Ads.getInstance();
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }
    run(player) {
        this.player = player;
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handleTimeUpdate);
    }
    handleTimeUpdate() {
        const currentTime = Math.floor(this.media.currentTime);
        if (currentTime % 30 === 0)
            this.renderAd();
    }
    renderAd() {
        if (this.currentAd)
            return;
        const ad = this.ads.getAD();
        this.currentAd = ad;
        console.log(ad);
    }
}
export default AdsPlugins;
