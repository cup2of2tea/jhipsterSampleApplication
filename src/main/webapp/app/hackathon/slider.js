(function () {
    'use strict';
    angular.module('jhipsterSampleApplicationApp').component('slider', {
        templateUrl: 'app/hackathon/slider.html',
        controller:['$scope',function ($scope) {
            var dates = [];
            for (var i = 2; i <= 11; i++) {
                dates.push(new Date(2018, i, 1));
            }
            $scope.slider = {
                value: dates[0], // or new Date(2016, 7, 10) is you want to use different instances
                options: {
                    stepsArray: dates,
                    translate: function (date) {
                        if (date != null)
                            return date.toDateString();
                        return '';
                    }
                }
            };
        }]
    });
})();