import VideoItem from './VideoItem'

export default class HomeCtrl {
    constructor(HomeService, StaticResource, SETTINGS) {
        this.HomeService = HomeService;

        this.sortingList = StaticResource.getSortingList();
        this.maxResultsList = [10, 20, 30, 50, 100];
        this.filters = {
            maxResults: SETTINGS.SEARCH.DEFAULT_MAX_RESULT,
            order: SETTINGS.SEARCH.DEFAULT_SORTING
        };
    }

    searchVideos() {
        this.error = null;
        this.HomeService.searchVideo(this.textToSearch, this.filters).then(
            list => this.videoList = this.prepareList(list),
            errorResponse => this.error = errorResponse.data.error.message
        );
    }

    prepareList(list) {
        let result = [];
        let i = list.length;
        while (i--) {
            let item = new VideoItem(list[i]);
            result.push(item);
        }
        return result;
    }
}

HomeCtrl.$inject = ['HomeService', 'StaticResource', 'SETTINGS'];