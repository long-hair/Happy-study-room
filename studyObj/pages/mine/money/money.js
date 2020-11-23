Page({
  data: {
    moneyType: [
      {
        id: '001',
        pr: 10,
        ot: 5
      },
      {
        id: '002',
        pr: 20,
        ot: 10
      },
      {
        id: '003',
        pr: 50,
        ot: 30
      },
      {
        id: '004',
        pr: 100,
        ot: 60
      },
      {
        id: '005',
        pr: 200,
        ot: 120
      },
      {
        id: '006',
        pr: 500,
        ot: 300
      },
    ],
    choosed: 10,
    type: 'wx',
    showModule: false
  },
  payAction(){
    this.setData({
      showModule: true
    })
  },
  clickAction(e){
    let pr = e.currentTarget.dataset.pr;
    this.setData({
      choosed: pr
    })
  },
  changeAction(e){
    this.setData({
      type: e.detail.value
    })
  },
  closeAction(){
    this.setData({
      showModule: false
    })
  },
  payTrueAction(){
    //调用充值接口  充值 并修改仓库数据 
    console.log(this.data.type);
    console.log(this.data.choosed);
    wx.showToast({
      title: '支付成功!',
      icon: 'none'
    });
    this.setData({
      showModule: false
    })
  }
})