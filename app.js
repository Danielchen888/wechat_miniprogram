App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  globalData: {
    userInfo: {
      avatarUrl: '/images/avatar.png',
      nickName: '1_3171',
      date: '2025.04.29 星期四',
      badges: [
        { icon: '/images/gold_badge.png', count: 2971 },
        { icon: '/images/travel_badge.png', text: '差旅' }
      ]
    },
    package: {
      id: '8792 1393 9271',
      status: '预计今日送达',
      fromDate: '2025年4月2日',
      fromCity: '上海市',
      toDate: '2025年4月3日',
      toCity: '青岛市, 山东省',
      currentStep: 3,
      totalSteps: 5,
      statusText: '包裹派送中'
    },
    skinScore: 78,
    skinType: '混合性',
    skinDetails: [
      { name: '水分', value: 85 },
      { name: '油分', value: 60 },
      { name: '弹性', value: 75 },
      { name: '色素', value: 65 }
    ]
  }
})
