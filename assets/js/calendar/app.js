/**
 * Created by HieuNguyen on 8/24/2015.
 */



(function () {
    var app = angular.module("calendar", []);
    var dumpEvent = [
        {
            "date":1440417136380,

        }
    ];

    app.controller('CalendarController', function () {
        var self = this;
        self.viewMode = 'month';
        self.currentDate = new Date();
        console.log(self.currentDate.getTime());
        self.ViewDate = new Date(self.currentDate);
        self.days = getDaysInMonth(this.currentDate.getMonth(), this.currentDate.getFullYear());

        self.nextMonth = function (month, year) {
            self.days = getDaysInMonth(month, year);
            self.ViewDate = new Date(year, month, 1);
        };

        self.prevMonth = function (month, year) {
            self.days = getDaysInMonth(month, year);
            self.ViewDate = new Date(year, month, 1);
        };

        self.toDay = function () {
            self.currentDate = new Date();
            self.days = getDaysInMonth(this.currentDate.getMonth(), this.currentDate.getFullYear());
            self.ViewDate = new Date(self.currentDate);
        };
    });
})();