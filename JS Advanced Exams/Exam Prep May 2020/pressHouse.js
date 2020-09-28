function pressHouse(){
    class Article{
    constructor(title, content){
        this.title = title;
        this.content = content;
    }

    toString(){
        let toReturn = `Title: ${this.title}\n`
        toReturn += `Content: ${this.content}`;
        return toReturn;
    }
}

class ShortReports extends Article{
    constructor(title, content, originalResearch){
        if (content.length >= 150) {
            throw new Error("Short reports content should be less then 150 symbols.");
        }else if(!originalResearch.author || !originalResearch.title){
            throw new Error("The original research should have author and title.");
        }
        super(title,content);
        this.originalResearch = originalResearch;
        this.comments = [];
    }

    addComment(comment){
        this.comments.push(comment);
        return "The comment is added.";
    }

    toString(){
        let toReturn = super.toString();
        toReturn += `\nOriginal Research: ${this.originalResearch.title} by ${this.originalResearch.author}`;
        if (this.comments.length > 0) {
            toReturn += `\nComments:`;
            for (const item of this.comments) {
                toReturn += `\n${item}`;
            }
        }
        return toReturn;
    }
}

class BookReview extends Article{
    constructor(title, content, book){
        super(title,content);
        this.book = book;
        this.clients = [];
    }

    addClient(clientName, orderDescription){
        let thisClient = this.clients.find(x=>x.clientName === clientName && x.orderDescription === orderDescription);
        if (thisClient !== undefined && this.clients.length > 0) {
            throw new Error("This client has already ordered this review.");
        }
        let client = {clientName: clientName, orderDescription: orderDescription};
        this.clients.push(client);

        return `${clientName} has ordered a review for ${this.book.name}`;
    }

    toString(){
        let toReturn = super.toString();
        toReturn += `\nBook: ${this.book.name}`;
        if (this.clients.length > 0) {
            toReturn += `\nOrders:`
            for (const client of this.clients) {
                toReturn += `\n${client.clientName} - ${client.orderDescription}`;
            }
        }
        return toReturn;
    }
}

return {Article, ShortReports, BookReview};
}
let classes = pressHouse();
let lorem = new classes.Article("Lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel…");
console.log(lorem.toString()); 
let short = new classes.ShortReports("SpaceX and Javascript", "Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?", { title: "Dragon 2", author: "wikipedia.org" });
console.log(short.addComment("Thank god they didn't use java."))
short.addComment("In the end JavaScript's features are executed in C++ — the underlying language.")
console.log(short.toString());
let book = new classes.BookReview("The Great Gatsby is so much more than a love story", "The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...", { name: "The Great Gatsby", author: "F Scott Fitzgerald" });
console.log(book.addClient("The Guardian", "100 symbols"));
console.log(book.addClient("Goodreads", "30 symbols"));
console.log(book.toString()); 

