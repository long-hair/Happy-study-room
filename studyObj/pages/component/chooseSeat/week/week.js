// pages/component/chooseSeat/week/week.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    time:{
      type:Number
    },
    windex:{
      type:Number
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    d:0,
    week:0,
    arr:[],
    weeklist:['周日','周一','周二','周三','周四','周五','周六'],
    datelist:[],

  },
  /**
   * 组件的方法列表
   */
  methods: {
    indexChange(ev){
      const index = ev.currentTarget.dataset.index;
      console.log('子week',index)

      this.triggerEvent('wIndexChange',index)


    }

  },

  pageLifetimes:{
    show:function(){
      console.log('show',this.properties.time)
      const d = this.properties.time ? new Date(this.properties.time)  :  new Date();
      // 时间戳
      this.setData({d:d});
      // 年
      const year = d.getFullYear();
      // 周
      let week = d.getDay();
      // 月
      let month = d.getMonth()+1;
      // 日
      let day = d.getDate();
      this.setData({week:week});
      const ar = [];
      let dayl = '';
      let dayar = [];



      // 连续7天
      for(var i = 0;i<7;i++){
        // 周
       if(week>=7){
         week = week - 7;
       }
       ar.push(this.data.weeklist[week]);
       week ++;
      //  时间

      // 设置周
      //  设置日期
      if(month<10){
        month = '0'+parseInt(month); 
      }
      dayl = month + '.' +day;
      dayar.push(dayl);

      day++;
      switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
           if(day>31){

            day =1; 
            month=month+1;
            if(month>12){
              month = 1;
            }
           }
  
        break;
        case 2:
               if (year%4==0&&year%100!=0 || year%400==0){
                 if(day>28){
                  day =1; 
                  month = month +1;
                  if(month>12){
                    month = 1;
                  }
                 }
               }
             else{
               if(day>27){
                day =1; 
                month = month +1;
                if(month>12){
                  month = 1;
                }
               }
                
             }
        break;
       default:
         if(day>30){
          day =1; 
          month = month +1;
          if(month>12){
            month = 1;
          }
         }
         break;
      }


      
    }
    console.log(dayar);
    this.setData({arr:ar})

    this.setData({datelist:dayar})
    console.log(ar);

   
  }
  

}
})
