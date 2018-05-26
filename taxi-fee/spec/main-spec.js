"use strict"
var chai = require("chai");
var expect = chai.expect;
var main = require('../main/main');

describe('taxi fee', function () {
    /*
    ���ǿ��ǳ��⳵�Ƽ����⣬���⳵���˼���ÿ����0.8Ԫ���˹���������50%��ÿ�����˼ۣ��𲽼�������������6�飬ͣ���ȴ�ʱ����ÿ����0.25Ԫ�����Ƽ۵�ʱ��˾������������ֻ������Ǯ��
    */
    // main(miles, stopTime);
    it(" // 2��������6��", function(){
        var result = main(2, 0);
        expect(result).to.equal(6);
    });
    it(" // 5���� = 6 + 3*0.8 = 8.4 ->8��", function(){
        var result = main(5, 0);
        expect(result).to.equal(8);
    });
    it(" // 5����+10���� = 8.4 + 0.25*10 = 10.9 ->10��", function(){
        var result = main(5, 10);
        expect(result).to.equal(10);
    });
    it(" // 8���� = 6 + 6*0.8 = 10��", function(){
        var result = main(8, 0);
        expect(result).to.equal(10);
    });
    it(" // 9���� = 6 + 6*0.8 + 1*1.2 = 12��", function(){
        var result = main(9, 0);
        expect(result).to.equal(12);
    });
    it(" // 9����+10���� = 6 + 6*0.8 + 1*1.2 + = 14��", function(){
        var result = main(9, 10);
        expect(result).to.equal(14);
    });
});
