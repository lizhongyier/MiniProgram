const db = wx.cloud.database();
// 获取用户信息
const getUser = function () {
  return new Promise((resolve, reject) => {
    db.collection('user').get().then(resolve).catch(reject);
  });
}
// 修改头像地址
const setUserAvatar = function (id,path){
    return new Promise((resolve,reject)=>{
      db.collection('user').doc(id).update({
        data: { avatarUrl: path }
      }).then(resolve).catch(reject);
    })
}

// 存入数据库
const addUser = function (data) {
  console.log(data);
  return new Promise((resolve, reject) => {
  getUser().then(res=>{
    if (res.data == 0) {
    db.collection("user")
      .add({
        data: data
      })
      .then(resolve)
      .catch(reject);}
  }).catch(reject)


 
    
  });
}

// 导出模块
module.exports = {
  addUser,
  getUser,
  setUserAvatar
};