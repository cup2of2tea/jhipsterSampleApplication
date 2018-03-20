(function () {
    'use strict';

    angular
        .module('jhipsterSampleApplicationApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('forceDirectedGraph', {
            parent: 'chapter11',
            url: '/forceDirectedGraph',
            data: {
                authorities: []
            },
            views: {
                'childVizualisation': {
                    templateUrl: 'app/d3Demo/chapter11/forceDirectedGraph/forceDirectedGraph.html',
                    controller: 'ForceDirectedGraphController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
