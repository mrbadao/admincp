/**
 * Created by HieuNguyen on 8/24/2015.
 */

function getDaysInMonth(month, year) {
    var mMonth = [];
    var mWeek = [];

    var firstDay = new Date(year, month, 1);
    var starDay = new Date(year, month, 1 - firstDay.getDay());
    
    var i = 0;
    while (i < 42) {
        //mWeek.push({"date":new Date(starDay)});
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

function getEvent(events, date) {
    var eventDate;
    for (var i = 0; i < events.length; i++) {
        eventDate = new Date(events[i].startdate);
        if (eventDate.getDate() == date.getDate())
            return events[i];
    }
    return '';
}
