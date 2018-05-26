//loadAllItems = require("../src/items.js");
//loadPromotions = require("../src/promotions.js");

var ItemsArray = initAllItems();
var proMotions = loadPromotions();
var NO_DISCOUNT = -1, HALF_DISCOUNT = 0, SETTLE_DISCOUNT = 1;

function bestCharge(selectedItems) {
  var outText = "============= 订餐明细 =============\n";
  var totalPrice = 0;    // 订单实际价格
  var halfDiscountPrice = 0;  // 抵扣的金额 - 半价折扣
  var settleDiscountPrice = 6;  // 抵扣的金额 - 半价折扣

  var resultDiscount = 0; // 最终折扣价
  var usingDisCountMethod = SETTLE_DISCOUNT; // 抵扣方式

  var disCountName = "";
  var disCountText = "";
  for(var i = 0; i < selectedItems.length; i++){
    var OneItem = selectedItems[i].split(" x ");
    var itemID = OneItem[0];
    var count = OneItem[1];
    var calcResult = calcPrice(itemID, count);       // [折扣商品，折扣价格]
    var price = ItemsArray[itemID]["price"] * count; // 实际价格
    if(calcResult[1] != price){ // 存在半价商品
      halfDiscountPrice += calcResult[1];
      disCountName+=calcResult[0]+"，"; // 中文逗号
    }
    var LineText = ItemsArray[itemID]["name"] + " x " + count + " = " + price +"元\n";
    outText += LineText;
    totalPrice += price;
  }

  console.log(halfDiscountPrice);
  if(halfDiscountPrice == 0 || (halfDiscountPrice <= settleDiscountPrice) ){
    // 如果是没有半价商品 或者是半价价格比固定折扣要低
    if(totalPrice >= 30){
      resultDiscount = settleDiscountPrice;
      usingDisCountMethod = SETTLE_DISCOUNT;
    }else if(halfDiscountPrice == 0){
      usingDisCountMethod = NO_DISCOUNT;
    } else{
      resultDiscount = halfDiscountPrice;
      usingDisCountMethod = HALF_DISCOUNT;
    }
  } else{ // 有半价折扣，并且比固定折扣面值大
    resultDiscount = halfDiscountPrice;
    usingDisCountMethod = HALF_DISCOUNT;
  }

  if(usingDisCountMethod == HALF_DISCOUNT){
    disCountName = disCountName.substr(0, disCountName.length-1);
    disCountText = "-----------------------------------\n使用优惠:\n指定菜品半价("+disCountName+")，省" + resultDiscount+"元\n";
  }else if(usingDisCountMethod == SETTLE_DISCOUNT){
    disCountText = "-----------------------------------\n使用优惠:\n满30减6元，省6元\n";
  }
  outText += disCountText + "-----------------------------------\n";
  outText += "总计：" + (totalPrice-resultDiscount) + "元\n===================================";
  return outText;
}
function calcPrice(curItemID, itemCount){
  // 先计算一下单个的金额-注意半价
  var price = ItemsArray[curItemID]["price"];
  if(proMotions[1].items.indexOf(curItemID) >= 0){
    // 存在半价商品
    price /= 2;
  }
  return [ItemsArray[curItemID]["name"], price*itemCount];
}
function initAllItems(){
  var items = loadAllItems();
  var ItemsArray = new Array();
  for(var i = 0; i < items.length; i++){
    var item = items[i];
    ItemsArray[item.id] = {"name":item.name, "price":item.price};
  }
  return ItemsArray;
}
//module.exports = bestCharge;
