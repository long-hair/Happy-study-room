Page({
  data: {
    id: '',
    area: ''
  },
  onLoad({id,area}){
    console.log(id);
    console.log(area);
    this.setData({
      id,
      area
    })
  }
})