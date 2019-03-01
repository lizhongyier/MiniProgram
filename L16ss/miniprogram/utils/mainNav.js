const db = wx.cloud.database();
// 获取主导航
const getmainNav = function (n = 10) {
  return new Promise((resolve, reject) => {
    db.collection('mainNav').get().then(resolve).catch(reject);
  });
}

// 导出模块
module.exports = {
  getmainNav
};