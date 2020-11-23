import {HOST} from './api';

class Request {
  constructor(base){
    this.baseUrl = base;
  };
  async request(method, url, data = {}){
    const token = wx.getStorageSync('TOKEN');
    const header = {};
    if(token) {
      header.Authorization = 'Bearer' + token;
    }
    return new Promise( (resolve,reject)=>{
      wx.request({
        url: this.baseUrl + url,
        method,
        data,
        header,
        success(res){
          if(res.statusCode >= 200 && res.statusCode < 300 ){
            resolve(res.data);
          }else{
            reject(res.data);
          }
        },
        fail(error){
          reject(error);
        }
      })
    } )
  };
  get(url, data = {} ){
    return this.request('GET', url, data);
  };
  post(url, data = {}){
    return this.request('POST', url, data);
  }
};

export default new Request(HOST);
