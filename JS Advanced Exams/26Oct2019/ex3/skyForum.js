class Forum{
    #users;
    #questions;
    #id;
    constructor(){
        this.#users = [];
        this.#questions = [];
        this.#id = 1;
    }

    register(username, password, repeatPassword, email){
        if (username === '' || password === '' || repeatPassword === '' || email === '') {
            throw new Error("Input can not be empty");
        }else if (password !== repeatPassword) {
            throw new Error("Passwords do not match");
        } else if(this.#users.some(x=>x.userName === username) || this.#users.some(x=>x.email === email)){
            throw new Error("This user already exists!");
        }
        let newUser = {userName: username, password: password, email:email, logged: false};
        this.#users.push(newUser);
        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password){
        let user = this.#users.find(x=>x.userName === username);
        if (user === undefined) {
            throw new Error("There is no such user");
        }
        user.logged = true;
        return "Hello! You have logged in successfully";
    }

    logout(username, password){
        let user = this.#users.find(x=>x.userName === username);
        if (user === undefined) {
            throw new Error("There is no such user");
        }
        user.logged = false;
        return "You have logged out successfully";
    }

    postQuestion(username, question){
        this.checkUserAndQuestion(username, question, 'question');
        let newQuestion = {user: username, question: question, id: this.#id++, answers: []};
        this.#questions.push(newQuestion);
        return "Your question has been posted successfully";
    }

    postAnswer(username, questionId,answer){
        this.checkUserAndQuestion(username, answer, 'answer');

        let question = this.#questions.find(x=>x.id === questionId);
        if (question === undefined) {
            throw new Error("There is no such question");
        }
        let newAnswer = {user:username, answer:answer};
        question.answers.push(newAnswer);
        return "Your answer has been posted successfully";

    }

    showQuestions(){
        let toReturn = '';

        for (let i = 0; i < this.#questions.length; i++) {
            const question = this.#questions[i]
            toReturn += `Question ${question.id} by ${question.userName}: ${question.question}`;
            for (const answer of question.answers) {
                toReturn += `\n---${answer.user}: ${answer.answer}`;
            }
            if (i !== this.#questions.length) {
                toReturn += '\n';
            }
        }
        return toReturn;
    }

    checkUserAndQuestion(username, text, type){
        let user = this.#users.find(x=>x.userName === username);
        if(user === undefined || user.logged === false){
            if (type === 'question') {
                throw new Error("You should be logged in to post questions");
            }
            throw new Error("You should be logged in to post answers");
        }else if(text === ''){
            if (type === 'question') {
                throw new Error("Invalid question");
            } 
            throw new Error("Invalid answer");
        }
    }   
}


let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan',1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael',2, "How old is she?");
forum.postAnswer('Michael',2, "Tell us how tall she is.");

console.log(forum.showQuestions());
