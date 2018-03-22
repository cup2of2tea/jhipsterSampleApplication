(function () {
    'use strict';
    angular.module('jhipsterSampleApplicationApp').component('slider', {
        templateUrl: 'app/hackathon/slider.html',
        controller:['$scope',function ($scope) {
            var dates = [];
            for (var i = 2018; i <= 2021; i++) {
                dates.push(new Date(i, 1, 1));
            }
            $scope.slider = {
                value: dates[0], // or new Date(2016, 7, 10) is you want to use different instances
                options: {
                    stepsArray: dates,
                    translate: function (date) {
                        if (date != null)
                            return date.toLocaleDateString().substring(6,15);
                        return '';
                    }
                }
            };
        }]
    });
})();