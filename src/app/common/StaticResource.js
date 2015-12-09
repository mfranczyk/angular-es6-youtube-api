import angular from 'angular';

class StaticResource {

    getSortingList() {
        return [
            {
                name: 'Data',
                key: 'date'
            },
            {
                name: 'Ocena',
                key: 'rating'
            },
            {
                name: 'Dopasowanie',
                key: 'relevance'
            },
            {
                name: 'Tytuł',
                key: 'title'
            },
            {
                name: 'Liczba wyświetleń',
                key: 'viewCount'
            }
        ];
    }
}

export default angular.module('app.StaticResource', [])
    .service('StaticResource', StaticResource)
    .name;
