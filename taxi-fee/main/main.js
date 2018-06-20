var pricePerMile = 0.8;// 每公里0.8元
var pricePerMile_BIG = 1.2;// 50%溢价
var upMile = 2; // 两公里
var toMile = 8; // 8公里后会加收50%的每公里运价
var startPrice = 6; // 起步价两公里6元
var stopWaitPrice = 0.25; // 停车等待加收0.25/元

module.exports = function main(miles, stopTime) {
    // 开始计算
    price = parseInt(CountPrice(miles, stopTime));
    console.log("运行" + miles + "公里,停车等待"+stopTime+"分钟");
    console.log("花了：" + price + "元");
    return price;
};
function CountPrice(miles, stopTime){

    var price = startPrice;
    if(miles < toMile){
        // 8公里以内
        if(miles > upMile){
            // 2-8公里
            price += (miles-upMile) * pricePerMile;
        } else{
            // 小于2公里
            price = startPrice;
        }   
    }else{
        // 2公里 + 6公里 + (n-8)公里
        price += 0.8*(toMile-upMile) + (miles-toMile)*pricePerMile_BIG;
    }
    // 加上停顿的时间
    return price + stopWaitPrice*stopTime;
}