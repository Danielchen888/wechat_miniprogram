// weatherService.js
// 和风天气API服务工具类

// API密钥 - 实际应用中可以考虑更安全的存储方式
const API_KEY = 'fb18a3c1b80b46a3937ca9fd05c2d248';
const API_BASE_URL = 'https://devapi.qweather.com';

// 天气图标映射表
const weatherIconMap = {
  '100': '/images/sunny.png',      // 晴天
  '101': '/images/cloudy.png',     // 多云
  '102': '/images/cloudy.png',     // 少云
  '103': '/images/cloudy.png',     // 晴间多云
  '104': '/images/overcast.png',   // 阴天
  '300': '/images/rain.png',       // 阵雨
  '301': '/images/rain.png',       // 强阵雨
  '302': '/images/thunder.png',    // 雷阵雨
  '303': '/images/thunder.png',    // 强雷阵雨
  '304': '/images/hail.png',       // 雷阵雨伴有冰雹
  '305': '/images/rain.png',       // 小雨
  '306': '/images/rain.png',       // 中雨
  '307': '/images/rain.png',       // 大雨
  '308': '/images/rain.png',       // 极端降雨
  '309': '/images/rain.png',       // 毛毛雨/细雨
  '310': '/images/rain.png',       // 暴雨
  '311': '/images/rain.png',       // 大暴雨
  '312': '/images/rain.png',       // 特大暴雨
  '313': '/images/rain.png',       // 冻雨
  '314': '/images/rain.png',       // 小到中雨
  '315': '/images/rain.png',       // 中到大雨
  '316': '/images/rain.png',       // 大到暴雨
  '317': '/images/rain.png',       // 暴雨到大暴雨
  '318': '/images/rain.png',       // 大暴雨到特大暴雨
  '399': '/images/rain.png',       // 雨
  '400': '/images/snow.png',       // 小雪
  '401': '/images/snow.png',       // 中雪
  '402': '/images/snow.png',       // 大雪
  '403': '/images/snow.png',       // 暴雪
  '404': '/images/sleet.png',      // 雨夹雪
  '405': '/images/sleet.png',      // 雨雪天气
  '406': '/images/sleet.png',      // 阵雨夹雪
  '407': '/images/snow.png',       // 阵雪
  '408': '/images/snow.png',       // 小到中雪
  '409': '/images/snow.png',       // 中到大雪
  '410': '/images/snow.png',       // 大到暴雪
  '499': '/images/snow.png',       // 雪
  '500': '/images/fog.png',        // 薄雾
  '501': '/images/fog.png',        // 雾
  '502': '/images/haze.png',       // 霾
  '503': '/images/sand.png',       // 扬沙
  '504': '/images/sand.png',       // 浮尘
  '507': '/images/sand.png',       // 沙尘暴
  '508': '/images/sand.png',       // 强沙尘暴
  '509': '/images/fog.png',        // 浓雾
  '510': '/images/fog.png',        // 强浓雾
  '511': '/images/fog.png',        // 大雾
  '512': '/images/fog.png',        // 特强浓雾
  '513': '/images/fog.png',        // 霾
  '514': '/images/fog.png',        // 中度霾
  '515': '/images/fog.png',        // 重度霾
  '900': '/images/hot.png',        // 热
  '901': '/images/cold.png',       // 冷
  '999': '/images/unknown.png'     // 未知
};

// 默认图标
const DEFAULT_ICON = '/images/sunny.png';

/**
 * 获取实时天气数据
 * @param {Object} location 位置信息，格式为 {latitude, longitude}
 * @returns {Promise} 返回天气数据Promise
 */
function getNowWeather(location) {
  return new Promise((resolve, reject) => {
    if (!location || !location.latitude || !location.longitude) {
      reject(new Error('位置信息不完整'));
      return;
    }

    // 构建API请求URL
    const locationParam = `${location.longitude},${location.latitude}`;
    const url = `${API_BASE_URL}/v7/weather/now?location=${locationParam}&key=${API_KEY}&lang=zh`;

    // 发起网络请求
    wx.request({
      url: url,
      method: 'GET',
      success: (res) => {
        if (res.statusCode === 200 && res.data && res.data.code === '200') {
          // 处理返回的天气数据
          const weatherData = processWeatherData(res.data);
          resolve(weatherData);
        } else {
          // API返回错误
          reject(new Error(`API错误: ${res.data.code}`));
        }
      },
      fail: (err) => {
        // 网络请求失败
        reject(new Error(`网络请求失败: ${err.errMsg}`));
      }
    });
  });
}

/**
 * 获取空气质量数据
 * @param {Object} location 位置信息，格式为 {latitude, longitude}
 * @returns {Promise} 返回空气质量数据Promise
 */
function getAirQuality(location) {
  return new Promise((resolve, reject) => {
    if (!location || !location.latitude || !location.longitude) {
      reject(new Error('位置信息不完整'));
      return;
    }

    // 构建API请求URL
    const locationParam = `${location.longitude},${location.latitude}`;
    const url = `${API_BASE_URL}/v7/air/now?location=${locationParam}&key=${API_KEY}&lang=zh`;

    // 发起网络请求
    wx.request({
      url: url,
      method: 'GET',
      success: (res) => {
        if (res.statusCode === 200 && res.data && res.data.code === '200') {
          // 处理返回的空气质量数据
          const airData = processAirData(res.data);
          resolve(airData);
        } else {
          // API返回错误
          reject(new Error(`API错误: ${res.data.code}`));
        }
      },
      fail: (err) => {
        // 网络请求失败
        reject(new Error(`网络请求失败: ${err.errMsg}`));
      }
    });
  });
}

/**
 * 处理天气数据，转换为应用所需格式
 * @param {Object} data API返回的原始数据
 * @returns {Object} 处理后的天气数据
 */
function processWeatherData(data) {
  const now = data.now || {};
  
  // 获取天气图标
  const iconCode = now.icon || '999';
  const weatherIcon = weatherIconMap[iconCode] || DEFAULT_ICON;
  
  // 获取温度范围（实际应用中可能需要额外请求每日预报API）
  const tempRange = `${parseInt(now.temp) + 3}/${parseInt(now.temp) - 8}°C`;
  
  // 构建返回的天气数据对象
  return {
    location: data.fxLink ? data.fxLink.split('/').pop().split('-')[0] : '未知位置',
    icon: weatherIcon,
    temperature: parseInt(now.temp) || 0,
    feelTemp: parseInt(now.feelsLike) || 0,
    range: tempRange,
    text: now.text || '未知天气',
    updateTime: data.updateTime || '',
    humidity: {
      icon: '/images/humidity_icon.png',
      value: `${now.humidity || 0}%`,
      level: getHumidityLevel(now.humidity)
    },
    wind: {
      icon: '/images/wind_icon.png',
      value: `${now.windScale || 0}级`,
      level: getWindLevel(now.windScale)
    }
  };
}

/**
 * 处理空气质量数据，转换为应用所需格式
 * @param {Object} data API返回的原始数据
 * @returns {Object} 处理后的空气质量数据
 */
function processAirData(data) {
  const now = data.now || {};
  
  return {
    uv: {
      icon: '/images/uv_icon.png',
      value: '0', // 空气质量API中没有UV指数，需要额外请求
      level: '未知'
    },
    pollution: {
      icon: '/images/pollution_icon.png',
      value: now.aqi || '0',
      level: getAqiLevel(now.aqi)
    }
  };
}

/**
 * 根据湿度值获取湿度级别描述
 * @param {String|Number} humidity 湿度值
 * @returns {String} 湿度级别描述
 */
function getHumidityLevel(humidity) {
  const humidityNum = parseInt(humidity) || 0;
  
  if (humidityNum < 30) return '低';
  if (humidityNum < 60) return '中';
  return '高';
}

/**
 * 根据风力等级获取风力级别描述
 * @param {String|Number} windScale 风力等级
 * @returns {String} 风力级别描述
 */
function getWindLevel(windScale) {
  const scale = parseInt(windScale) || 0;
  
  if (scale <= 3) return '低';
  if (scale <= 6) return '中';
  return '高';
}

/**
 * 根据空气质量指数获取空气质量级别描述
 * @param {String|Number} aqi 空气质量指数
 * @returns {String} 空气质量级别描述
 */
function getAqiLevel(aqi) {
  const aqiNum = parseInt(aqi) || 0;
  
  if (aqiNum <= 50) return '优';
  if (aqiNum <= 100) return '良';
  if (aqiNum <= 150) return '轻度';
  if (aqiNum <= 200) return '中度';
  if (aqiNum <= 300) return '重度';
  return '严重';
}

// 导出模块函数
module.exports = {
  getNowWeather,
  getAirQuality
};
