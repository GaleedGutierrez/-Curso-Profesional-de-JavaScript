import Ads from './Ads.js';
class AdsPlugins {
    ads;
    player;
    media;
    currentAd;
    adsContainer;
    constructor() {
        this.ads = Ads.getInstance();
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
        this.adsContainer = document.createElement('div');
        this.adsContainer.classList.add('ads');
    }
    run(player) {
        this.player = player;
        this.player.container.appendChild(this.adsContainer);
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
        this.adsContainer.innerHTML = `
                <a  class="ads__link" href="${this.currentAd.url}" target="_blank">
                    <figure class="ads__img" >
                        <img src="${this.currentAd.imageUrl}" />
                    </figure>
                    <div class="ads__info">
                        <h5 class="ads__title">${this.currentAd.title}</h5>
                        <p class="ads__body">${this.currentAd.body}</p>
                    </div>
                </a>
        `;
        setTimeout(() => {
            this.currentAd = null;
            this.adsContainer.innerHTML = '';
        }, 10000);
    }
}
export default AdsPlugins;
