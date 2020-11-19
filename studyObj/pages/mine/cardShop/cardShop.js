// 卡卷数据类型
// type: {
//   id: String,     //标号ID
//   name: String,   //名称
//   area: String,   //区域
//   dura: String,   //持续时间
//   price: Number   //价格
// }
Page({
  data: {
    cardType: [
      {
        id: '001',
        name: '单人区日卡',
        area: '明区',
        dura: '激活后一小时',
        price: 10
      },
      {
        id: '002',
        name: '单人区日卡',
        area: '暗区',
        dura: '激活后一小时',
        price: 8
      },
      {
        id: '003',
        name: '双人区日卡',
        area: '明区',
        dura: '激活后一小时',
        price: 15
      },
      {
        id: '004',
        name: '双人区日卡',
        area: '暗区',
        dura: '激活后一小时',
        price: 13
      }
    ],
    showMask: false,
    price: 0,
    type: 1
  },
  buyAction(ev){
    let price = ev.currentTarget.dataset.price;
    this.setData({
      price,
      showMask: true
    })
  },
  chooseAction(e){
    this.setData({
      type: Number(e.detail.value)
    })
  },
  payAction(){
    console.log(this.data.price);
    console.log(this.data.type);
    this.setData({
      showMask: false
    });
    wx.showToast({
      title: '购买成功!',
      icon: 'none'
    })
  },
  closeAction(){
    this.setData({
      showMask: false
    })
  }
})