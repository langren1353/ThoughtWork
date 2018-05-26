"use strict"
var chai = require("chai");
var expect = chai.expect;
var main = require('../main/main');

describe('taxi fee', function () {
    /*
    我们考虑出租车计价问题，出租车的运价是每公里0.8元，八公里起会加收50%的每公里运价，起步价是两公里以内6块，停车等待时加收每分钟0.25元，最后计价的时候司机会四舍五入只收整块钱。
    */
    // main(miles, stopTime);
    it(" // 2公里以内6块", function(){
        var result = main(2, 0);
        expect(result).to.equal(6);
    });
    it(" // 5公里 = 6 + 3*0.8 = 8.4 ->8块", function(){
        var result = main(5, 0);
        expect(result).to.equal(8);
    });
    it(" // 5公里+10分钟 = 8.4 + 0.25*10 = 10.9 ->10块", function(){
        var result = main(5, 10);
        expect(result).to.equal(10);
    });
    it(" // 8公里 = 6 + 6*0.8 = 10块", function(){
        var result = main(8, 0);
        expect(result).to.equal(10);
    });
    it(" // 9公里 = 6 + 6*0.8 + 1*1.2 = 12块", function(){
        var result = main(9, 0);
        expect(result).to.equal(12);
    });
    it(" // 9公里+10分钟 = 6 + 6*0.8 + 1*1.2 + = 14块", function(){
        var result = main(9, 10);
        expect(result).to.equal(14);
    });
});
