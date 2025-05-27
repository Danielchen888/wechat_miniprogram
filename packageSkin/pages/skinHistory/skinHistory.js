// skinHistory.js
Page({
  data: {
    currentFilter: 'week',
    historyList: [
      {
        date: '2025-05-20',
        day: '星期二',
        score: 78,
        details: [
          { name: '水分', value: 85 },
          { name: '油分', value: 60 },
          { name: '弹性', value: 75 },
          { name: '色素', value: 65 }
        ]
      },
      {
        date: '2025-05-15',
        day: '星期四',
        score: 75,
        details: [
          { name: '水分', value: 80 },
          { name: '油分', value: 65 },
          { name: '弹性', value: 70 },
          { name: '色素', value: 68 }
        ]
      },
      {
        date: '2025-05-10',
        day: '星期六',
        score: 72,
        details: [
          { name: '水分', value: 78 },
          { name: '油分', value: 68 },
          { name: '弹性', value: 65 },
          { name: '色素', value: 70 }
        ]
      }
    ]
  },
  onLoad() {
    // 页面加载时执行的逻辑
  },
  changeFilter(e) {
    const filter = e.currentTarget.dataset.filter;
    this.setData({
      currentFilter: filter
    });
    // 根据筛选条件更新历史数据
  },
  navigateBack() {
    wx.navigateBack();
  }
})
