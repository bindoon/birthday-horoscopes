  
const assert = require('power-assert');
const bh = require('../src/index');
const calendar = require('../src/calendar');

// describe.skip('BH', () => {
//    it('should get 己亥 at 2019', () => {
//     assert(bh.getTGDZFromYear(2019) === '己亥');
//     assert(bh.getTGDZFromYear(1968) === '戊申');
//    });

//    it('should get 己亥乙亥辛亥 at 2019-11-10', () => {
//     assert(bh.getTGFromYearMonth(2019, 11) === '乙');
//     assert(bh.getDZFromYearMonth(2019, 11) === '亥');
//    });
// });

describe('calendar', () => {
    it('should get 己亥乙亥辛亥 at 2019-11-10', () => {
        const info = calendar.solar2lunar(2019,11,10);

        assert(info.gzYear === '己亥');
        assert(info.gzMonth === '乙亥');
        assert(info.gzDay === '辛亥');

        const info2 = calendar.solar2lunar(1968,8,8);
        assert(info2.gzYear === '戊申');
        assert(info2.gzMonth === '庚申');
        assert(info2.gzDay === '庚戌');
    });
});