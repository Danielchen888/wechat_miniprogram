// healthHistory.js
Page({
  data: {
    currentFilter: 'week',
    historyList: [
      {
        date: '2025-05-20',
        day: '星期二',
        bmi: 21.2,
        bmiStatus: '正常',
        steps: {
          value: 1.8,
          unit: '公里/天'
        },
        calories: {
          value: 6215,
          unit: '消耗'
        }
      },
      {
        date: '2025-05-15',
        day: '星期四',
        bmi: 21.5,
        bmiStatus: '正常',
        steps: {
          value: 2.1,
          unit: '公里/天'
        },
        calories: {
          value: 6520,
          unit: '消耗'
        }
      },
      {
        date: '2025-05-10',
        day: '星期六',
        bmi: 21.8,
        bmiStatus: '正常',
        steps: {
          value: 1.5,
          unit: '公里/天'
        },
        calories: {
          value: 5980,
          unit: '消耗'
        }
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
