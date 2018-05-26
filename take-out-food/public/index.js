// 请把与index.html页面相关的javascript代码写在这里
// 同时删除该注释

function calculatePrice() {
  // 想办法调用`bestCharge`并且把返回的字符串
  // 显示在html页面的`message`中
  var messageNodeFather = document.querySelector("#message");
  var inputData = genInputData();
  if(inputData == -1) {
    alert("数据格式异常");
    return;
  }
  messageNodeFather.innerHTML = bestCharge(inputData);
}

function clear() {
  // 清除用户的选择，以及页面显示的信息
  // 清除之后，用户可以继续正常使用各项功能
}

function genInputData(){
  var inputCountNodes = document.querySelectorAll(".BuyInputCount");
  var inputData = [];
  var counter = 0;
  for(var i = 0; i < inputCountNodes.length; i++){
    if(inputCountNodes[i].value == "") continue;
    if(/\d+/.test(inputCountNodes[i].value)) {
      inputData[counter++] = inputCountNodes[i].id + " x " + inputCountNodes[i].value;
    }else{
      return -1;
    }
  }
  console.log(inputData);
  return inputData;
}

(function (){
  var goodItemFather = document.querySelector("#items");
  goodItemFather.innerHTML = "";
  var goodItems = loadAllItems();
  for(var i = 0; i < goodItems.length; i++){
    var faNode = document.createElement("div");
    var curGoodItem = goodItems[i];
    faNode.className = "goodItem";
    faNode.innerHTML = "<div id='goodName'>"+curGoodItem.name+"</div><div id='goodPrice'>"+curGoodItem.price+"元</div><div>请输入购买数量<input class='BuyInputCount' id='"+curGoodItem.id+"'></div>";
    goodItemFather.appendChild(faNode);
  }

  var itemArray = initAllItems();

  var cuponNodeFather = document.querySelector("#promotions");
  cuponNodeFather.innerHTML = "";
  var goodItems = loadPromotions();
  for(var i = 0; i < goodItems.length; i++){
    var faNode = document.createElement("div");
    var curGoodItem = goodItems[i];
    faNode.className = "disCountItem";
    var html = curGoodItem.type;
    if(curGoodItem.items != null){
      html += "：";
      for(var j = 0; j < curGoodItem.items.length; j++){
        console.log(itemArray[curGoodItem.items[j]]);
        html += itemArray[curGoodItem.items[j]].name+", ";
      }
      html = html.substr(0, html.length-1);
    }
    faNode.innerHTML = html;
    cuponNodeFather.appendChild(faNode);
  }

})()
