const db = wx.cloud.database();
// 获取商品详情 then:成功操作  catch:失败操作 doc指明_id的获取标识，而id是形参
const getProductDetail = function(id) {
  return new Promise((resolve, reject) => {
    db.collection("product").doc(id).get().then(resolve).catch(reject);
  });
}

// 加入到购物车云列表中去
const addShoppingcart = function (data){
  console.log(data);
  return new Promise((resolve,reject)=>{
    db.collection("shoppingCart").add(
      {data:data}
    ).then(resolve,
    console.log(data)).catch(reject);
  })
}
// 获取云购物车
const getShoppingcart = function () {
  return new Promise((resolve, reject) => {
    db.collection('shoppingCart').field({
      //field能够控制只获取_id、title、image、price项
      _id: true,
      title: true,
      image: true,
      product_id: true,
      price: true,
      count:true,
      size:true,
      color:true
    })
      .get().then(resolve).catch(reject);
  });
}
// 移除购物车
const deleteShopping = function (id) {
  return new Promise((resolve, reject) => {
    db.collection("shoppingCart")
      .doc(id)
      .remove()
      .then(resolve)
      .catch(reject);
  });
}


// 获取商品列表
const getProductList = function(n = 10,p=1) {
  return new Promise((resolve, reject) => {
    db.collection('product').field({
      //field能够控制只获取_id、title、image、price项
        _id: true,
        title: true,
        image: true,
        price: true
      })
      .limit(n)
      .skip((p - 1) * n)
      .get()
      .then(resolve)
      .catch(reject);

  });
}

// 导出模块
module.exports = {
  getProductList,
  getProductDetail,
  addShoppingcart,
  getShoppingcart,
  deleteShopping
};