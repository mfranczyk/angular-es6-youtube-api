import angular from 'angular';
import SETTINGS from '../../config/settings';

class VideoDetailsService {
    constructor($http, SETTINGS) {
        this.$http = $http;
        this.SETTINGS = SETTINGS;
    }

    getComments(id) {
        let request = {
            params: {
                key: this.SETTINGS.API_KEY,
                maxResults: this.SETTINGS.COMMENTS.DEFAULT_MAX_RESULT,
                part: this.SETTINGS.COMMENTS.PART,
                videoId: id
            }
        };



        return this.$http.get(this.SETTINGS.COMMENTS.URL_API, request).then(
            response => {
                return response.data.items;
            }
        );
    }
}

export default angular.module('app.VideoService', [])
    .service('VideoDetailsService', VideoDetailsService)
    .name;

VideoDetailsService.$inject = ['$http', 'SETTINGS'];
