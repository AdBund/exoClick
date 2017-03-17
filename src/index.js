import Campaign from './lib/campaign';

export default class exoAds {
  constructor(apiKey) {
    this.campaign = new Campaign(apiKey);
  }
}
