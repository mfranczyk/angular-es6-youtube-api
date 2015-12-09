import angular from 'angular';
import SETTINGS from '../../config/settings';

class HomeService {
    constructor($http, SETTINGS) {
        this.$http = $http;
        this.SETTINGS = SETTINGS;
    }

    searchVideo(query, filters) {
        let request = {
            params: {
                key: this.SETTINGS.API_KEY,
                type: this.SETTINGS.SEARCH.TYPE,
                part: this.SETTINGS.SEARCH.RETURN_DATA,
                fields: this.SETTINGS.SEARCH.FIELDS,
                q: query
            }
        };

        Object.assign(request.params, filters);

        return this.$http.get(this.SETTINGS.SEARCH.URL_API, request).then(
            response => {
                return response.data.items;
            }
        );
    }
}

export default angular.module('app.Service', [])
    .service('HomeService', HomeService)
    .name;

HomeService.$inject = ['$http', 'SETTINGS'];
