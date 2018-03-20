(function () {
    'use strict';

    angular
        .module('jhipsterSampleApplicationApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('chapter11', {
            parent: 'app',
            url: '/chapter11',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/d3Demo/chapter11/chapter11.html',
                    controller: 'Chapter11Controller',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
