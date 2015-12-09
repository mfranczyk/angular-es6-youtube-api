
export default class CommentItem {
    constructor(item) {
        let snippet = item.snippet.topLevelComment.snippet;
        this.authorName = snippet.authorDisplayName;
        this.authorImage = snippet.authorProfileImageUrl;
        this.text = snippet.textDisplay;
    }
}