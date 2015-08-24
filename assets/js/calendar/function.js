/**
 * Created by HieuNguyen on 8/24/2015.
 */

function getDaysInMonth(month, year) {
    var mMonth = [];
    var mWeek = [];
    firstDay = new Date(year, month, 1);
    lastDay = new Date(year, month + 1, 0);
    var starDay = new Date(year, month, 1 - firstDay.getDay());
    var i = 0;
    while (i < 42) {
        mWeek.push(new Date(starDay));
        starDay.setDate(starDay.getDate() + 1);
        i++;
        if (i % 7 == 0 && i != 0) {
            mMonth.push(mWeek);
            mWeek = [];
        }
    }
    return mMonth;
}
