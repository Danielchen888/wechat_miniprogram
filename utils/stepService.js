// stepService.js
// 微信步数获取与卡路里计算服务

/**
 * 请求微信运动步数授权
 * @returns {Promise} 返回授权结果Promise
 */
function requestWeRunAuth() {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.werun']) {
          // 已授权
          resolve(true);
        } else {
          // 未授权，发起授权请求
          wx.authorize({
            scope: 'scope.werun',
            success: () => {
              resolve(true);
            },
            fail: (err) => {
              console.error('微信运动授权失败:', err);
              reject(new Error('微信运动授权失败'));
            }
          });
        }
      },
      fail: (err) => {
        console.error('获取授权设置失败:', err);
        reject(new Error('获取授权设置失败'));
      }
    });
  });
}

/**
 * 获取微信运动步数数据
 * @returns {Promise} 返回加密的步数数据Promise
 */
function getEncryptedWeRunData() {
  return new Promise((resolve, reject) => {
    // 先调用wx.login获取code
    wx.login({
      success: (loginRes) => {
        if (loginRes.code) {
          // 获取微信运动数据
          wx.getWeRunData({
            success: (weRunRes) => {
              // 返回加密数据和code
              resolve({
                code: loginRes.code,
                encryptedData: weRunRes.encryptedData,
                iv: weRunRes.iv,
                cloudID: weRunRes.cloudID
              });
            },
            fail: (err) => {
              console.error('获取微信运动数据失败:', err);
              reject(new Error('获取微信运动数据失败'));
            }
          });
        } else {
          reject(new Error('登录失败'));
        }
      },
      fail: (err) => {
        console.error('微信登录失败:', err);
        reject(new Error('微信登录失败'));
      }
    });
  });
}

/**
 * 解密微信运动数据（模拟解密，实际应在服务端进行）
 * 注意：此函数仅用于演示，实际项目中应将加密数据发送至服务端解密
 * @param {Object} encryptedData 加密的数据对象
 * @returns {Promise} 返回解密后的步数数据Promise
 */
function decryptWeRunData(encryptedData) {
  return new Promise((resolve, reject) => {
    // 模拟解密过程和服务器请求延迟
    setTimeout(() => {
      try {
        // 模拟解密后的数据
        // 实际项目中，这里应该是向后端发送请求，由后端解密并返回数据
        const mockDecryptedData = {
          stepInfoList: [
            {
              timestamp: Math.floor(Date.now() / 1000) - 86400,
              step: 3500
            },
            {
              timestamp: Math.floor(Date.now() / 1000),
              step: Math.floor(Math.random() * 5000) + 3000 // 模拟今日步数
            }
          ]
        };
        
        resolve(mockDecryptedData);
      } catch (err) {
        console.error('解密数据失败:', err);
        reject(new Error('解密数据失败'));
      }
    }, 500);
  });
}

/**
 * 获取今日步数
 * @param {Array} stepInfoList 步数信息列表
 * @returns {Number} 今日步数
 */
function getTodaySteps(stepInfoList) {
  if (!stepInfoList || stepInfoList.length === 0) {
    return 0;
  }
  
  // 获取今日零点的时间戳
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayTimestamp = Math.floor(today.getTime() / 1000);
  
  // 查找今日步数
  for (let i = stepInfoList.length - 1; i >= 0; i--) {
    const stepInfo = stepInfoList[i];
    if (stepInfo.timestamp >= todayTimestamp) {
      return stepInfo.step;
    }
  }
  
  return 0;
}

/**
 * 计算卡路里消耗
 * @param {Number} steps 步数
 * @param {Object} userInfo 用户信息，包含体重等
 * @returns {Number} 消耗的卡路里
 */
function calculateCalories(steps, userInfo = {}) {
  // 默认参数
  const weight = userInfo.weight || 60; // 默认体重60kg
  const gender = userInfo.gender || '女'; // 默认性别女
  
  // 根据性别确定步长
  const stepLength = gender === '男' ? 0.8 : 0.6; // 男性步长0.8m，女性步长0.6m
  
  // 消耗系数
  const calorieCoefficient = 0.0005;
  
  // 计算卡路里：步数 × 步长(m) × 体重(kg) × 消耗系数
  const calories = steps * stepLength * weight * calorieCoefficient;
  
  // 四舍五入到整数
  return Math.round(calories);
}

/**
 * 获取完整的步数和卡路里信息
 * @param {Object} userInfo 用户信息
 * @returns {Promise} 返回步数和卡路里信息Promise
 */
function getStepsAndCalories(userInfo = {}) {
  return new Promise((resolve, reject) => {
    // 请求授权
    requestWeRunAuth()
      .then(() => {
        // 获取加密数据
        return getEncryptedWeRunData();
      })
      .then((encryptedData) => {
        // 解密数据（实际项目中应发送至服务端解密）
        return decryptWeRunData(encryptedData);
      })
      .then((decryptedData) => {
        // 获取今日步数
        const todaySteps = getTodaySteps(decryptedData.stepInfoList);
        
        // 计算卡路里消耗
        const calories = calculateCalories(todaySteps, userInfo);
        
        // 返回结果
        resolve({
          steps: todaySteps,
          calories: calories,
          unit: '步/天',
          caloriesUnit: '卡路里'
        });
      })
      .catch((err) => {
        console.error('获取步数和卡路里失败:', err);
        
        // 返回默认数据
        resolve({
          steps: 0,
          calories: 0,
          unit: '步/天',
          caloriesUnit: '卡路里',
          error: err.message
        });
      });
  });
}

// 导出模块函数
module.exports = {
  requestWeRunAuth,
  getEncryptedWeRunData,
  decryptWeRunData,
  getTodaySteps,
  calculateCalories,
  getStepsAndCalories
};
