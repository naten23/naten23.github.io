document.addEventListener("DOMContentLoaded", function() {
  const quizQuestions = [
    {
      question: "Question 1: What is my nickname?",
      answer: "Nathan"
    },
    {
      question: "Question 2: What is the colour of my heart?",
      answer: "Blue"
    },
    {
      question: "Question 3: Do i have a lover?",
      answer: "No"
    },
    {
      question: "Question 4: What is my main phone number?(enter without +998)",
      answer: "997521832"
    },
    {
      question: "Question 5: What is my IELTS score?",
      answer: "7"
    },
    {
     question: "Question 6: How many telegram accounts do i have?",
      answer: "2"
    }
  ];

  let currentQuestion = 0;

  const questionElement = document.getElementById("question");
  const answerInput = document.getElementById("answer-input");
  const submitButton = document.getElementById("submit-button");
  const resultContainer = document.getElementById("result-container");

  function displayQuestion() {
    questionElement.textContent = quizQuestions[currentQuestion].question;
  }

  function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = quizQuestions[currentQuestion].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
      if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        displayQuestion();
        resultContainer.style.display = "none";
      } else {
        window.location.href = "reward.html";
      }
    } else {
      resultContainer.style.display = "block";
      resultContainer.innerHTML = "<p>Incorrect answer. Try again!</p>";
    }

    answerInput.value = "";
  }

  displayQuestion();

  submitButton.addEventListener("click", () => {
    checkAnswer();
  });

  answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      checkAnswer();
    }
  });
});