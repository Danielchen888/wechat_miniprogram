// skinDetail.js
Page({
  data: {
    skinData: {
      type: '混合性',
      score: 78,
      details: [
        { name: '水分', value: 85 },
        { name: '油分', value: 60 },
        { name: '弹性', value: 75 },
        { name: '色素', value: 65 }
      ],
      advice: [
        { title: '清洁', content: '使用温和的洁面产品，避免过度清洁导致皮肤屏障受损。' },
        { title: '保湿', content: '选择轻薄质地的保湿产品，T区可以使用控油产品。' },
        { title: '防晒', content: '日常防晒不可少，选择SPF30以上的防晒产品。' }
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
