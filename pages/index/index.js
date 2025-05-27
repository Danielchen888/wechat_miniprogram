// index.js
const app = getApp()
const weatherService = require('../../utils/weatherService.js')

Page({
  data: {
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
    audio: {
      title: '早间护肤',
      step: '第二步：精华',
      currentTime: '00:14',
      totalTime: '02:00',
      coverImage: '/images/audio_cover.png'
    },
    weather: {
      location: '徐汇区·上海',
      icon: '/images/sunny.png',
      temperature: 17,
      feelTemp: 15,
      range: '20/9°C',
      text: '晴',
      updateTime: '',
      uv: {
        icon: '/images/uv_icon.png',
        value: '8.3',
        level: '强'
      },
      pollution: {
        icon: '/images/pollution_icon.png',
        value: '137',
        level: '轻度'
      },
      humidity: {
        icon: '/images/humidity_icon.png',
        value: '53%',
        level: '中'
      },
      wind: {
        icon: '/images/wind_icon.png',
        value: '3级',
        level: '低'
      }
    },
    weatherLoading: false,
    weatherError: '',
    userStats: {
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
        icon: '/images/steps_icon.png',
        value: 1.8,
        unit: '公里/天'
      },
      calories: {
        icon: '/images/calories_icon.png',
        value: 6215,
        unit: '消耗'
      }
    },
    skinScore: 78,
    skinType: '混合性',
    skinDetails: [
      { name: '水分', value: 85 },
      { name: '油分', value: 60 },
      { name: '弹性', value: 75 },
      { name: '色素', value: 65 }
    ],
    skinCareRoutine: {
      activeTab: 'morning', // 'morning' 或 'evening'
      steps: [
        {
          title: '第一步',
          name: '清洁',
          image: '/images/cleanser.png'
        },
        {
          title: '第二步',
          name: '功效',
          image: '/images/serum.png'
        },
        {
          title: '第三步',
          name: '封闭',
          image: '/images/moisturizer.png'
        }
      ]
    },
    skinForecast: {
      activeTab: 'overview', // 'overview', 'month', 'season', 'year'
      chartImage: '/images/skin_forecast_chart.png',
      indicators: [
        { color: '#3498db', name: '干性/油性' },
        { color: '#e74c3c', name: '敏感/耐受' },
        { color: '#2ecc71', name: '皱纹性' },
        { color: '#f1c40f', name: '色素性' }
      ]
    }
  },
  onLoad() {
    // 页面加载时执行的逻辑
    this.fetchWeatherData();
  },
  
  // 获取天气数据
  fetchWeatherData() {
    // 设置加载状态
    this.setData({
      weatherLoading: true,
      weatherError: ''
    });
    
    // 获取用户位置
    wx.getLocation({
      type: 'gcj02', // 使用国测局坐标系
      success: (res) => {
        const location = {
          latitude: res.latitude,
          longitude: res.longitude
        };
        
        // 获取城市名称
        this.getLocationName(location);
        
        // 获取天气数据
        this.fetchRealTimeWeather(location);
      },
      fail: (err) => {
        // 位置获取失败，使用默认位置（上海）
        console.error('获取位置失败:', err);
        const defaultLocation = {
          latitude: 31.2304,
          longitude: 121.4737
        };
        
        this.setData({
          weatherError: '位置获取失败，使用默认位置数据',
          'weather.location': '上海市'
        });
        
        // 使用默认位置获取天气
        this.fetchRealTimeWeather(defaultLocation);
      }
    });
  },
  
  // 获取位置名称
  getLocationName(location) {
    // 使用微信逆地址解析API获取位置名称
    wx.request({
      url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${location.latitude},${location.longitude}&key=JMRBZ-JBGC6-BJVS2-MJBOK-V7J25-CUFHT`,
      success: (res) => {
        if (res.data && res.data.status === 0 && res.data.result) {
          const addressComponent = res.data.result.address_component;
          const locationName = `${addressComponent.district}·${addressComponent.city}`;
          
          this.setData({
            'weather.location': locationName
          });
        }
      },
      fail: (err) => {
        console.error('获取位置名称失败:', err);
      }
    });
  },
  
  // 获取实时天气数据
  fetchRealTimeWeather(location) {
    // 并行请求天气和空气质量数据
    Promise.all([
      weatherService.getNowWeather(location),
      weatherService.getAirQuality(location)
    ])
    .then(([weatherData, airData]) => {
      // 合并天气和空气质量数据
      const combinedData = {
        ...weatherData,
        uv: airData.uv,
        pollution: airData.pollution
      };
      
      // 更新页面数据
      this.setData({
        weather: combinedData,
        weatherLoading: false
      });
      
      console.log('天气数据更新成功:', combinedData);
    })
    .catch((err) => {
      console.error('获取天气数据失败:', err);
      this.setData({
        weatherLoading: false,
        weatherError: `获取天气数据失败: ${err.message}`
      });
      
      // 显示错误提示
      wx.showToast({
        title: '天气数据获取失败',
        icon: 'none',
        duration: 2000
      });
    });
  },
  switchSkinCareTab(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      'skinCareRoutine.activeTab': tab
    });
  },
  switchForecastTab(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      'skinForecast.activeTab': tab
    });
  },
  updateSkinInfo() {
    wx.showToast({
      title: '肤质信息已更新',
      icon: 'success',
      duration: 2000
    });
  },
  navigateToSkinDetail() {
    wx.navigateTo({
      url: '/packageSkin/pages/skinDetail/skinDetail'
    });
  },
  navigateToHealthDetail() {
    wx.navigateTo({
      url: '/packageHealth/pages/healthDetail/healthDetail'
    });
  }
})
