const main = require('../main/main');

describe('taxi fee', function () {
/*
我们考虑出租车计价问题，出租车的运价是每公里0.8元，八公里起会加收50%的每公里运价，起步价是两公里以内6块，停车等待时加收每分钟0.25元，最后计价的时候司机会四舍五入只收整块钱。
*/
    // main(miles, stopTime);
    main(2, 0);
    main(5, 0);
    main(5, 10);
    main(8, 0);
    main(9, 0);
    main(9, 10);
});
