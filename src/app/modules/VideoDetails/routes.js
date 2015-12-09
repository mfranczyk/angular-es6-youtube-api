videoDetailsRoutes.$inject = ['$stateProvider'];

export default function videoDetailsRoutes($stateProvider) {
    $stateProvider
        .state('videoDetails', {
            url: '/videoDetails',
            template: require('./videoDetails.html'),
            controller: 'VideoDetailsCtrl',
            controllerAs: 'vdCtrl',
            params: {
                video: null
            }
        });
}