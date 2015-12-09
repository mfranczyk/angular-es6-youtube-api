routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            template: require('./home.html'),
            controller: 'HomeCtrl',
            controllerAs: 'hCtrl'
        });
}