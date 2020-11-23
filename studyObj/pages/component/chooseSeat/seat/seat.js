// pages/component/chooseSeat/seat/seat.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    temporal_interval:{
      type:Array,
      value:[14,22]
    },
    table_num:{
      type:Number,
      value:5,
    },
    // 1已满 2空闲 3已选
    seats:{
      type:Object,
      value:{
        '1':{
          0:2,
          1:1,
          3:0,
          4:2
        }
      }
    },

  },

  /**
   * 组件的初始数据
   */
  data: {
    time_list:[]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    active(ev){
      console.log(ev);
      const coordinate = ev.currentTarget.dataset.index
      const time = coordinate[0]+ this.properties.temporal_interval[0]+':00-'+(coordinate[0]+ this.properties.temporal_interval[0]+1)+':00' 
      console.log(coordinate,time);
      this.setData({time_list:[...this.data.time_list,time]});
      this.triggerEvent('seatChange',{time,coordinate})

    },
   

  }
})
