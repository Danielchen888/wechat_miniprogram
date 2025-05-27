// healthDetail.js
Page({
  data: {
    healthData: {
      gender: '女',
      age: 25,
      height: 169,
      weight: 65,
      bmi: 21.2,
      bmiStatus: '正常',
      bmiRange: {
        min: 18.5,
        max: 28.0,
        target: 24.0,
        current: 21.2
      },
      steps: {
        value: 1.8,
        unit: '公里/天'
      },
      calories: {
        value: 6215,
        unit: '消耗'
      },
      advice: [
        { title: '饮食', content: '保持均衡饮食，多摄入蔬果，控制精制糖和高脂食物的摄入。' },
        { title: '运动', content: '建议每周进行150分钟中等强度有氧运动，如快走、游泳或骑自行车。' },
        { title: '睡眠', content: '保持每晚7-8小时的充足睡眠，维持规律的作息时间。' }
      ]
    }
  },
  onLoad() {
    // 页面加载时执行的逻辑
  },
  navigateBack() {
    wx.navigateBack();
  }
})
