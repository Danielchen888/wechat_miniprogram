const API_KEY = 'your_api_key';
const API_SECRET = 'your_api_secret';

export const detectSkin = (filePath) => {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: 'https://api-cn.faceplusplus.com/facepp/v3/skinanalyze',
      filePath,
      name: 'image_file',
      formData: {
        api_key: API_KEY,
        api_secret: API_SECRET,
        return_landmark: 2,
        calculate_all: 1
      },
      success: (res) => {
        const data = JSON.parse(res.data);
        if (data.faces && data.faces.length > 0) {
          resolve(data);
        } else {
          reject(new Error('未检测到有效面部'))
        }
      },
      fail: reject
    })
  });
};