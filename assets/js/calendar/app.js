/**
 * Created by HieuNguyen on 8/24/2015.
 */



(function () {
    var app = angular.module("calendar", []);

    var dumpEvent = [
        {
            "startdate": 1440417136380,
            "enddate": 1440417136380,
            "type": "default",
            "name": "meeting"
        }
    ];
    var Events = dumpEvent;

    app.controller('CalendarController', ['$sce', function ($sce) {
        var self = this;

        self.viewMode = 'month';
        self.currentDate = new Date();
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

        self.initEvents = function (date) {
            var htmlEvent = '';
            var myEvent = getEvent(Events, date);
            if (myEvent) {
                htmlEvent = '<div class="event-wrapper" >' +
                    '<span class="day-event default" ng-click="self.toDay()">' + myEvent.name + '</span>' +
                    '</div>';
            }
            return $sce.trustAsHtml(htmlEvent);
        }


            //alert('adasdasd');

    }]);
})();