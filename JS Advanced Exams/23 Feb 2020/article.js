class Article{
    #commments = [];
    #likes = [];
    constructor(title, creator){
        this.title = title;
        this.creator = creator;
    }
    get likes(){
        if (this.#likes.length === 0) {
            return `${this.title} has 0 likes`;
        }else if(this.#likes.length === 1){
            return `${this.#likes[0]} likes this article!`;
        }
        return `${this.#likes[0]} and ${this.#likes.length-1} others like this article!`;
    }

    like(username){
        if (this.#likes.includes(username)) {
            throw new Error("You can't like the same article twice!");
        } else if(this.creator === username){
            throw new Error("You can't like your own articles!");
        }
        this.#likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username){
        if (!this.#likes.includes(username)) {
            throw new Error("You can't dislike this article!");
        }
        let index = this.#likes.indexOf(username);
        this.#likes.splice(index, 1);
        return `${username} disliked ${this.title}`
    }

    comment (username, content, id){
        if (id === undefined || !this.#commments.find(x=>x.Id === id)) {
            let currentId = this.#commments.length+1;
            let comment = {Id: currentId, Username: username, Content: content, Replies:[]};
            this.#commments.push(comment);
            return `${username} commented on ${this.title}`;
        } else {
            let comment = this.#commments.find(x=>x.Id === id);
            let replyId = id+0.1 + comment.Replies.length * 0.1;
            replyId = replyId.toFixed(1);
            let reply = {Id: replyId,
                 Username:username,
                 Content: content};
            comment.Replies.push(reply);
            return "You replied successfully";
        }
    }

    toString(sortingType){
        let sortedComments = this.#commments;
        switch (sortingType) {
            case 'asc':
                sortedComments.sort((a,b)=>compare(a.Id,b.Id));
            break;
            case 'desc':
                sortedComments.sort((a,b)=> compare(b.Id,a.Id));
            break;
            case 'username':
                sortedComments.sort((a,b)=>compare(a.Username, b.Username));
            break;
        }
        
        let toReturn = `Title: ${this.title}\n`;
        toReturn += `Creator: ${this.creator}\n`;
        toReturn += `Likes: ${this.#likes.length}\nComments:`;

        for (const comment of sortedComments) {
            toReturn += `\n-- ${comment.Id}. ${comment.Username}: ${comment.Content}`
            switch (sortingType) {
                case 'asc':
                    comment.Replies.sort((a,b)=>compare(a.Id,b.Id));
                break;
                case 'desc':
                    comment.Replies.sort((a,b)=> compare(b.Id,a.Id));
                break;
                case 'username':
                    comment.Replies.sort((a,b)=>compare(a.Username, b.Username));
                break;
            }
            for (const reply of comment.Replies) {
                
                toReturn += `\n--- ${reply.Id}. ${reply.Username}: ${reply.Content}`
            }
        }

        return toReturn;
         function compare(a,b){
            if (a>b) {
                return 1;
            }else if (a<b) {
                return -1
            } else {
                return 0;
            }
         }
    }
}

let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log(art.comment("Amy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log(art.toString('asc'));
console.log();
console.log(art.toString('username'));
