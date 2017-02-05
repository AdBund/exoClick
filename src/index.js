import Campaign from './lib/campaign';

const baseUrl = 'https://api.exoclick.com/v1';

export default class exoAds {
  constructor(apiKey) {
    this.campaign = new Campaign(apiKey);
  }
}
