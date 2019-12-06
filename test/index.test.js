  
const assert = require('power-assert');
const calendar = require('../src/calendar');

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
    it('should get 戊申庚申庚戌甲辰 at 1968-8-8 8:00:00', () => {
        const info2 = calendar.solar2lunar(1968,8,8,8);
        assert(info2.gzYear === '戊申');
        assert(info2.gzMonth === '庚申');
        assert(info2.gzDay === '庚戌');
        assert(info2.gzHour === '甲辰');
    });
});