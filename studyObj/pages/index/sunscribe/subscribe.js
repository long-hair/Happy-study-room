// pages/index/sunscribe/subscribe.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    wIndex:0,
    date:'',
    timestamp:0,
    target_date:new Date().getTime(),
    seats:{
      '1':{
        0:2,
        1:1,
        3:0,
        4:2
      }
    },
  },


  // 子组件对index的修改
  indexChange(e){
    this.setData({index:e.detail})
  },
  wIndexChange(e){
    this.setData({wIndex:e.detail.index})
    this.setData({date:e.detail.date})
    this.setData({target_date:e.detail.target_date})
  },
  seatChange(e){
    console.log('e',e)
    const coordinate = e.detail.coordinate;
    const time = e.detail.time;
    const row = coordinate[1]
    const column = coordinate[0];
    let seats_list= this.data.seats;
    if(!seats_list[column]){
     seats_list[column] = {};
    seats_list[column][row] = 2;
     console.log(1)
    }
    else if(seats_list[column][row]==0){
      console.log(3)
 
 
     }
    else if(!seats_list[column][row]){
    seats_list[column][row] = 2;
    console.log(2)



    }

    else if(seats_list[column][row]==1){
     console.log(4)

    seats_list[column][row]=2

     
    }else{
      seats_list[column][row]=1
     console.log(5)


    }
    this.setData({seats:seats_list})
    console.log(this.data.seats)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const d = new Date()
    console.log(d);
    console.log(options)
    this.setData({index:options.index})
    this.setData({timestamp:d});

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})