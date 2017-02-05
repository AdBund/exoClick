import {expect} from 'chai';

import exoAds from '../src';

let {apiKey}=process.env;

describe('exoAds', () => {
  it('apiKey should exist', () => {
    expect(apiKey).to.be.a('string');
  })

  let exo = new exoAds(apiKey);

  it('should initialize successfully', () => {
    expect(exo.campaign).to.be.an('object');
  })


  describe('login', () => {
    it('should login', (done) => {
      exo.campaign.getToken().then((token) => {
        exo.campaign.getToken().then((_token)=> {
          expect(_token).to.be.equal(token);
          done();
        });
      })

    })
  });

  describe('Campaign', () => {
    let campaignId = '';
    it('getAll', (done) => {
      exo.campaign.getAll().then((data) => {
        let campaignIds = Object.keys(data.result);
        expect(campaignIds).to.be.an('array');
        campaignId = campaignIds[0];
        done();
      })
    });

    it('getById',(done)=>{
      exo.campaign.getById(campaignId).then((data)=>{
        // console.log(data);
        done();
      })
    })
  });

  it('getGroups',(done)=>{
    exo.campaign.getGroups().then((data)=>{
      console.log(data);
      done();

    })
  })

});
