import request from '../utils/request';
import Base from './base';

export default class getCampagin extends Base {
  getAll() {
    let path = `${this.baseUrl}/campaigns`;
    return this.getToken().then((token) => {
      let p = request.get(path).set('Authorization', token).end();
      return p.then(res => res.body);
    })
  }

  getById(compaignId) {
    let path = `${this.baseUrl}/campaigns/${compaignId}`;
    return this.getToken().then((token) => {
      let p = request.get(path).set('Authorization', token).end();
      return p.then(res => res.body);
    })
  }

  getGroups() {
    let path = `${this.baseUrl}/campaigns/groups`;
    return this.getToken().then((token) => {
      let p = request.get(path).set('Authorization', token).end();
      return p.then(res => res.body);
    })
  }
}
