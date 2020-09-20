let solution = function()
{
    let commands = {
        upvote: (item) => upvote(item),
        downvote: (item) => downvote(item),
        score: (item) => score(item),
        call: (obj, args) => call(obj,args)
    }
    function call(post, operation) {
        switch (operation) {
            case 'upvote':
            return upvote(post);
            case 'downvote':
            return downvote(post);
            case 'score':
            return score(post);
        }
    }
    function upvote(post) {
        post.upvotes++;
    }
    function downvote(post) {
        post.downvotes++;
    }
    function score(post)
    {
        let upvotes = post.upvotes;
        let downvotes = post.downvotes;
        let difference = upvotes-downvotes;
        let allVotes = upvotes+downvotes;

        let rating = '';
        if (allVotes < 10) {
            rating = 'new';
        }else if (upvotes/allVotes > 0.66) {
            rating = 'hot';
        }else if(upvotes > 100 || downvotes > 100){
            rating = 'controversial';
        }else if (upvotes - downvotes < 0) {
            rating = 'unpopular';
        }else
        {
            rating = 'new';
        }
        if (allVotes > 50) {
        let votesToAdd = Math.ceil(Math.max(upvotes, downvotes)*0.25);
            upvotes += votesToAdd;
            downvotes += votesToAdd;
        }
        return [upvotes, downvotes, difference, rating];
    }
    return commands;
}();

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 1,
    downvotes: 0
};
let score = solution.call(post, 'score'); 
console.log(score);