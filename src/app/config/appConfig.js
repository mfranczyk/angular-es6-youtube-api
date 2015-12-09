config.$inject = ['$urlRouterProvider', '$httpProvider'];

export default function config($urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $httpProvider.defaults.withCredentials = true;
}