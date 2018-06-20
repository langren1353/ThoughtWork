const main = require('../main/main');

describe('main()', () => {
	var one;
	var two;
	var result;

	one = "1234";
	two = "1234";
	result = "4A0B";
	doTest(one, two, result);

	one = "1234";
	two = "4321";
	result = "0A4B";
	doTest(one, two, result);

	one = "1234";
	two = "1356";
	result = "1A1B";
	doTest(one, two, result);
});

function doTest(one, two, result){
	it("系统-"+one+"；用户"+two+"；预期"+result, function(){
		expected = main.main(one, two);
		console.log("系统-"+one+"；用户"+two+"；预期"+result+"---我的结果："+expected);
		expect(result).toEqual(expected)
	});
}