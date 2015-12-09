export default class VideoItem {
    constructor(item) {
        let id = item.id;
        let snippet = item.snippet;
        this.id = id.videoId;
        this.thumbnail = snippet.thumbnails.default.url;
        this.title = snippet.title;
        this.description = snippet.description;
        this.channelTitle = snippet.channelTitle;
    }
}