import CommentItem from './CommentItem'
export default class VideoDetailsCtrl {
    constructor($state, $stateParams, VideoDetailsService) {
        this.VideoDetailsService = VideoDetailsService;

        if (!$stateParams.video) {
            $state.go('home');
        } else {
            this.video = $stateParams.video;
            this.initVideo();
            this.getComments();
        }
    }

    initVideo() {
        let url = 'https://www.youtube.com/embed/';
        this.embedUrl = url + this.video.id;
    }

    getComments() {
        this.error = null;
        this.VideoDetailsService.getComments(this.video.id).then(
            list => this.commentsList = this.prepareList(list)
        );
    }

    prepareList(list) {
        let result = [];
        let i = list.length;
        while (i--) {
            let item = new CommentItem(list[i]);
            result.push(item);
        }
        return result;
    }

}

VideoDetailsCtrl.$inject = ['$state', '$stateParams', 'VideoDetailsService'];