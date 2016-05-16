
export class Tweet {
    
    constructor(private imageUrl : String, 
                private author : String,
                private title : String,
                private nbLikes : number,
                private message : String,
                private isLiked : boolean) {
        
    }
    
    getImageUrl() {
        return this.imageUrl;
    }
    
    getAuthor() {
        return this.author;    
    }
    
    getTitle() {
        return this.title;
    }
    
    getNbLikes() {
        return this.nbLikes;
    }
    
    getMessage() {
        return this.message;
    }
    
    getIsLiked() {
        return this.isLiked;
    }
    
    incrementLike(value: number) {
        this.nbLikes += value;
    }
    
}