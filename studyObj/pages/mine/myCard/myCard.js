Page({
  data: {
    cardList: [
      {
        id: '001',
        name: '单人区日卡',
        area: '明区',
        dura: '激活后一小时',
      },
      {
        id: '002',
        name: '单人区日卡',
        area: '明区',
        dura: '激活后一小时',
      },
      {
        id: '003',
        name: '单人区日卡',
        area: '明区',
        dura: '激活后一小时',
      },
      {
        id: '004',
        name: '单人区日卡',
        area: '明区',
        dura: '激活后一小时',
      },
    ]
  },
  useAction(){
    console.log('useCard');
    //跳转到购买页面
    // wx.navigateTo({
    //   url: '',
    // })
  }
})