const db = wx.cloud.database();
const uploadImage=function(path,name){
  return new Promise((resolve,reject)=>{
    wx.cloud.uploadFile({
      cloudPath: name,
      filePath: path,
    }).then(resolve).catch(reject);
  })
}

// 导出模块
module.exports = {
  uploadImage
};