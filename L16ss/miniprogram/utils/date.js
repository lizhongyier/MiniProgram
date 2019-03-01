const dateFormat = function (timestamp = 0){
let time=new Date(timestamp);
let y=time.getFullYear();
let m=time.getMonth();
let d=time.getDate();
let h=time.getHours();
let min=time.getMinutes();
let s=time.getSeconds();

  return y + "/" + doubleNumber(m + 1) + "/" + doubleNumber(d) + " " + doubleNumber(h) + ":" + doubleNumber(min) + ":" + doubleNumber(s);
}

// 格式化时间戳人性化的表示
const dateFormatStr = function (timestamp = 0) {
  let now = new Date().getTime();
  // 时间差
  timestamp = (now - timestamp) / 1000;
  if (timestamp <= 10) {
    return "刚刚";
  } else if (timestamp < 60) {
    return Math.floor(timestamp) + "秒前";
  } else if (timestamp < 3600) {
    return Math.floor(timestamp / 60) + "分前";
  } else if (timestamp < 86400) {
    return Math.floor(timestamp / 3600) + "小时前";
  } else if (timestamp < 2592000) {
    return Math.floor(timestamp / 86400) + "天前";
  } else if (timestamp < 31536000) {
    return Math.floor(timestamp / 2592000) + "月前";
  } else {
    return Math.floor(timestamp / 31536000) + "年前";
  }
}

const doubleNumber = function (n) {
  return n < 10 ? ('0' + n) : n;
}
module.exports = {
  // dateFormat: dateFormat 下面是简写
  dateFormat,
  dateFormatStr
}