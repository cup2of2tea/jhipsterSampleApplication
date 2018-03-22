(function () {
    'use strict';

    angular
        .module('jhipsterSampleApplicationApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('lvl1', {
            url: '/lvl1',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/hackathon/lvl1.html',
                    controller: 'lvl1Controller',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
