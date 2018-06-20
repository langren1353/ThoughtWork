// Write your cade below:
function main(sysData, yourData) {
	return findDifferent(sysData, yourData);
};

function findDifferent(sysData, yourData){
    var removeData = new Array();
    var counterA = 0, counterB = 0;
    for(var i = 0; i < sysData.length; i++){
        if(sysData[i] == yourData[i]){
	        removeData[counterA] = sysData[i];
	        counterA++;
        }
    }
    for(var i = 0; i < removeData.length; i++){
	    sysData = sysData.replace(removeData[i], "");
	    yourData = yourData.replace(removeData[i], "");
    }
    for(var i = 0; i < sysData.length; i++){
        for(var j = 0; j < yourData.length; j++){
           if(sysData[i] == yourData[j]){
               counterB++;
           }
        }
    }
    return counterA+"A" + counterB+"B";
}

module.exports = {
    main
}