const email = document.getElementById("inputEmail");
const fullName = document.getElementById("fullName");
const school = document.getElementById("inputSchool");
const questions = [
    {
        question: "Two number are in the ratio 3 : 5. If 9 is subtracted from each, the new numbers are in the ratio12 : 23. The smaller number is?",
        answers: [
            {text: "27", correct: false},
            {text: "33", correct: true},
            {text: "49", correct: false},
            {text: "55", correct: false}
        ]
    },
    {
        question: "A man covers a distance on scooter. Had he moved 3kmph faster he would have taken 40 min less. If he had moved 2kmph slower, he would have taken 40min more. The distance is?",
        answers: [
            {text: "30km", correct: false},
            {text: "40km", correct: true},
            {text: "45km", correct: false},
            {text: "50km", correct: false}
        ]
    },
    {
        question: "In each of the following questions a number series is given with one term missing. Choose the correct alternative that will continue the same pattern and fill in the blank spaces.2, 7, 14, 23, __? 47",
        answers: [
            {text: "31", correct: false},
            {text: "28", correct: false},
            {text: "34", correct: true},
            {text: "38", correct: false}
        ]
    },
    {
        question: "A train 150 m long is running at a speed of 68 kmph. How long does it take to pass a man who is running at 8 kmph in the same direction as the train?",
        answers: [
            {text: "5 Sec", correct: false},
            {text: "9 Sec", correct: true},
            {text: "12 Sec", correct: false},
            {text: "15 Sec", correct: false}
        ]
    },
    {
        question: "If 5 women or 8 girls can do a work in 84 days. In how many days can 10 women and 5 girls can do the same work?",
        answers: [
            {text: "32 Days", correct: true},
            {text: "48 Days", correct: false},
            {text: "52 Days", correct: false},
            {text: "38 Days", correct: false}
        ]
    }
];
const submit = document.getElementById("btn");
const questionElement = document.getElementById("question");
let questionIndex = 0;
let score = 0;

// function show(){
//     let currentQuestion = questions[questionIndex];
//     let questionNo = questionIndex + 1;
//     questionElement.innerHTML = `<h4>${questionNo}. ${currentQuestion.question}</h4>`;

//     currentQuestion.answers.forEach((answer, index) => {
//         questionElement.innerHTML += `
//             <div class="form-check">
//                 <input class="form-check-input" type="radio" value="index" id="flexCheck${index}">
//                 <label class="form-check-label" for="flexCheck${index}">${answer.text}</label>
//             </div>
//         `
//     })
// }
// show();

// function displayQuestions() {
//     questions.forEach((question, index) => {
//         questionElement.innerHTML += `<h4>${index + 1}. ${question.question}</h4>`;

//         question.answers.forEach((answer, ansIndex) => {
//             questionElement.innerHTML += `
//                 <div class="form-check">
//                     <input class="form-check-input" type="radio" name="question${index}} value="${ansIndex}" id="flexCheck${index}-${ansIndex}">
//                     <label class="form-check-label" for="flexCheck${index}-${ansIndex}">${answer.text}</label>
//                 </div>
//             `;
//         });
//     });
// }

function displayQuestions() {
    questions.forEach((question, index) => {
        const questionElement = document.createElement("h4");
        questionElement.textContent = `${index + 1}. ${question.question}`;
        document.getElementById("questionDiv").appendChild(questionElement);

        question.answers.forEach((answer, ansIndex) => {
            const answerElement = document.createElement("div");
            answerElement.classList.add("form-check");
            answerElement.classList.add("container");
            answerElement.classList.add("mb-2");

            const inputElement = document.createElement("input");
            inputElement.type = "radio";
            inputElement.name = `question${index}`;
            inputElement.value = ansIndex;
            inputElement.id = `flexCheck${index}-${ansIndex}`;

            const labelElement = document.createElement("label");
            labelElement.classList.add("form-check-label");
            labelElement.setAttribute("for", `flexCheck${index}-${ansIndex}`);
            labelElement.textContent = answer.text;

            answerElement.appendChild(inputElement);
            answerElement.appendChild(labelElement);

            document.getElementById("questionDiv").appendChild(answerElement);
        });
    });
}


function calculateScore() {
    score = 0;

    questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);

        if (selectedAnswer) {
            const selectedAnswerIndex = parseInt(selectedAnswer.value);

            if (question.answers[selectedAnswerIndex].correct) {
                score++;
            }
        }
    });

    alert(`Hello ${fullName.value} Your Score is ${score} out of ${questions.length}`);
    
}
submit.addEventListener("click", () => {
    if (fullName.value.trim() === "" || email.value.trim() === "" || school.value.trim() === "") {
        alert("Please fill in all required fields.");
        return;
    }
    calculateScore();
});


displayQuestions();

