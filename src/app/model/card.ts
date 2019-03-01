export class Card {
    public category: string;
    public question: string;
    public rightAnswer: string;
    public wrongAnswers: string[];
    public answers: string[];

    constructor(card: any) {
        this.category = card.category;
        this.question = card.question;
        this.rightAnswer = card.correct_answer;
        this.wrongAnswers = card.incorrect_answers;
        this.answers = card.incorrect_answers;
        this.answers.push(card.correct_answer);
    }
}
