import angular from 'angular';

const settings = {
    API_KEY: 'AIzaSyAZDgDzsLyU1E1D2Ic76Eol2NbuBp8SKyg',
    SEARCH: {
        URL_API: 'https://www.googleapis.com/youtube/v3/search',
        TYPE: 'video',
        RETURN_DATA: 'id,snippet',
        FIELDS: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
        DEFAULT_SORTING: 'relevance',
        DEFAULT_MAX_RESULT: 10
    },
    COMMENTS: {
        URL_API: 'https://www.googleapis.com/youtube/v3/commentThreads',
        DEFAULT_MAX_RESULT: 10,
        PART: 'snippet'
    }
};

export default angular.module('app.SETTINGS', [])
    .constant('SETTINGS', settings)
    .name;