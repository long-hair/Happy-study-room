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
    ]
  },
  payAction(){
    console.log('pay');
    
  }
})