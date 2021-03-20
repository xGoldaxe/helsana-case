export default function getQuestion(user, token) {
    return {
        question: "What is your favorite sport ?",
        questionId: 2,
        input: {
            type:"text",
            placeHolder:"Type your favorite sport",
            required: true
        }
    }
}