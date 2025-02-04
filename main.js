localStorage.removeItem("score"); 

const questions = [
    {
        question: "How many days are there in a leap year?",
        options: ["A. 365", "B. 366", "C. 364", "D. 367"],
        correctIndex: 1
    },
    {
        question: "Which is the largest planet in our solar system?",
        options: ["A. Earth", "B. Mars", "C. Saturn", "D. Jupiter"],
        correctIndex: 3
    },
    {
        question: "Who played the role of 'Munna Bhai' in Bollywood?",
        options: ["A. Shah Rukh Khan", "B. Sanjay Dutt", "C. Salman Khan", "D. Aamir Khan"],
        correctIndex: 1
    },
    {
        question: "Who was the first Prime Minister of India?",
        options: ["A. Sardar Patel", "B. Mahatma Gandhi", "C. Lal Bahadur Shastri", "D. Jawaharlal Nehru"],
        correctIndex: 3
    },
    {
        question: "Which festival is known as the Festival of Lights?",
        options: ["A. Eid", "B. Holi", "C. Diwali", "D. Christmas"],
        correctIndex: 2
    },
    {
        question: "Which one is not a programming language?",
        options: ["A. Python", "B. JavaScript", "C. CSS", "D. Java"],
        correctIndex: 2
    },
    {
        question: "Which is the national bird of India?",
        options: ["A. Peacock", "B. Eagle", "C. Sparrow", "D. Parrot"],
        correctIndex: 0
    },
    {
        question: "Which is the fastest land animal?",
        options: ["A. Tiger", "B. Cheetah", "C. Lion", "D. Deer"],
        correctIndex: 1
    },
    {
        question: "Which is the longest river in the world?",
        options: ["A. Amazon", "B. Ganga", "C. Nile", "D. Yamuna"],
        correctIndex: 2
    },
    {
        question: "Which is the national sport of India?",
        options: ["A. Cricket", "B. Hockey", "C. Kabaddi", "D. Football"],
        correctIndex: 1
    },
    {
        question: "Which is the tallest mountain in the world?",
        options: ["A. Mount Kilimanjaro", "B. K2", "C. Mount Everest", "D. Kanchenjunga"],
        correctIndex: 2
    },
    {
        question: "Which organ pumps blood in the human body?",
        options: ["A. Lungs", "B. Brain", "C. Liver", "D. Heart"],
        correctIndex: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;


const questionElement = document.querySelector(".qsn");
const optionElements = document.querySelectorAll(".options span");
const nextButton = document.querySelector(".btn");



// Function to show a question
function displayQuestion() {
    isOptionSelected = false

    let currentQuestion = questions[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question;
    optionElements.forEach((option, index) => {
        option.innerText = currentQuestion.options[index];
        option.className = ""; // Reset previous styles
        option.style.backgroundColor = "";
        option.onclick = () => checkAnswer(index, option);
    });

    nextButton.style.display = "none"; // Hide Next button until user selects an answer
}

let isOptionSelected = false;

// Function to check answer
function checkAnswer(selectedIndex, selectedOption) {
    if (isOptionSelected) return;

    isOptionSelected = true

    let correctIndex = questions[currentQuestionIndex].correctIndex;

    // Apply correct/wrong colors
    if (selectedIndex === correctIndex) {
        selectedOption.style.backgroundColor = "#2bff2b";
        score++;
    } else {
        selectedOption.style.backgroundColor = "red";
        optionElements[correctIndex].style.backgroundColor = "#2bff2b";
        // Apply shake animation
        let optionsContainer = document.querySelector(".options");
        optionsContainer.classList.add("shake");
        setTimeout(() => optionsContainer.classList.remove("shake"), 600);
    }
    
    
    // Show Next button
    nextButton.style.display = "block";
}

// Function to move to next question
function nextQuestion() {
    if (currentQuestionIndex === questions.length - 2) {
        nextButton.innerText = "Check Score"; // Update text before the last question is answered
    }

    currentQuestionIndex++;


    if (currentQuestionIndex >= questions.length) {
        // Calculate the final score before redirecting
        let finalScore = Math.round((score / questions.length) * 100);
            localStorage.setItem("score", finalScore); // Store score in localStorage
            window.location.href = "conclusion.html"; // Redirect to result page
    } else {
        displayQuestion();
    }
}

// Initialize quiz
displayQuestion();
nextButton.onclick = nextQuestion;