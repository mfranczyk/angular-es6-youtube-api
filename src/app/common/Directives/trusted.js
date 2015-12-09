import angular from 'angular';

function trusted($sce) {
    return function (url) {
        return $sce.trustAsResourceUrl(url);
    };
}

export default angular.module('app.filters', [])
    .filter('trusted', trusted)
    .name;

trusted.$inject = ['$sce'];