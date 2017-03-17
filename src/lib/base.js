/**
 * Created by song on 2017/1/21.
 */
let token = '';
let type = '';

import Promise from 'bluebird';
import request from '../utils/request';

export default class Base {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.exoclick.com/v1';
  }
  getToken() {
    return new Promise((resolve) => {
      if (token.length > 0) {
        resolve(`${type} ${token}`);
      } else {
        let url = `${this.baseUrl}/login`;
        let p = request.post(url).send({api_token: this.apiKey}).end();
        p.then((res) => {
          let {body} = res;
          token = body.token;
          type = body.type;
          let {expires_in} = body;

          setTimeout(() => {
            token = '';
            type = '';
          }, (expires_in / 2) * 1000);

          resolve(`${type} ${token}`);
        })
      }
    })
  }

}
