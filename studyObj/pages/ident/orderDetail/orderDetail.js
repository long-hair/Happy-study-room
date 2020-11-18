Page({
  data: {
    detail: {}
  },
  onLoad({detail}){
    let res = JSON.parse(detail);
    this.setData({
      detail: res
    })
  },
  changeAction(res){
    let id = this.data.detail.id;
    let area = this.data.detail.area;
    wx.navigateTo({
      url: '../../../pages/ident/changeTime/changeTime?id=' + id + '&area=' + area,
    })
  }
})