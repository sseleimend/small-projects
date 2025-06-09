document.addEventListener("DOMContentLoaded", () => {
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const nextBtn = document.getElementById("next-btn");

  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");
  const restartBtn = document.getElementById("restart-btn");

  const startBtn = document.getElementById("start-btn");

  const questions = [
    {
      question: "Qual é o resultado de `typeof null` em JavaScript?",
      choices: ["'object'", "'null'", "'undefined'", "'number'"],
      answer: "'object'",
    },
    {
      question:
        "Qual método é usado para adicionar um elemento no final de um array em JavaScript?",
      choices: ["push()", "pop()", "shift()", "unshift()"],
      answer: "push()",
    },
    {
      question: "O que o método `map()` faz em um array?",
      choices: [
        "Remove elementos duplicados",
        "Modifica o array original",
        "Cria um novo array com os resultados da função aplicada a cada item",
        "Ordena os elementos em ordem crescente",
      ],
      answer:
        "Cria um novo array com os resultados da função aplicada a cada item",
    },
    {
      question: "Como declarar uma constante em JavaScript?",
      choices: ["let", "var", "const", "static"],
      answer: "const",
    },
    {
      question: "O que significa `===` em JavaScript?",
      choices: [
        "Comparação de valor",
        "Atribuição de valor",
        "Comparação de valor e tipo",
        "Concatenação de strings",
      ],
      answer: "Comparação de valor e tipo",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener("click", startQuiz);

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = "";
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice));
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choice === correctAnswer) {
      score++;
    }
    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }
});
