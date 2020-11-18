Page({
  // item: {
  //   id: String,         // 订单标号id
  //   area: String,       // 座位区域（单、双）
  //   tabelNo: Number,    // 座号
  //   date: String,       // 日期
  //   time: String,       // 时间段
  //   price: Number,      // 价格
  //   status: Number      // 状态  1为待使用，2为已完成，3为已过期
  // },
  data: {
    orderList: [
      {
        id: '001',
        area: '双人区',
        tabelNo: 5,
        date: '2020-12-11',
        time: '18:00~19:00',
        price: 25.5,
        status: 1   //订单状态，1为待使用，2为已完成，3为已过期
      },
      {
        id: '002',
        area: '单人区',
        tabelNo: 8,
        date: '2020-12-12',
        time: '15:00~16:00',
        price: 12,
        status: 1   //订单状态，1为待使用，2为已完成，3为已过期
      },
      {
        id: '003',
        area: '双人区',
        tabelNo: 5,
        date: '2020-12-11',
        time: '18:00~19:00',
        price: 25.5,
        status: 2   //订单状态，1为待使用，2为已完成，3为已过期
      },
      {
        id: '004',
        area: '双人区',
        tabelNo: 5,
        date: '2020-12-11',
        time: '18:00~19:00',
        price: 25.5,
        status: 3   //订单状态，1为待使用，2为已完成，3为已过期
      }
    ]
  },
  pushAction(res){
    let detail = res.currentTarget.dataset.detail;
    wx.navigateTo({
      url: '/pages/ident/orderDetail/orderDetail?detail=' + JSON.stringify(detail),
    })
  }
})