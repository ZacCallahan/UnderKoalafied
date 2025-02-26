import React, { useState } from "react";
import "../styles/Quiz.css";

interface Question {
  question: string;
  image: string;
  answers: { text: string; character: string }[];
}

const questions: Question[] = [
  {
    question: "What is your favorite color?",
    image: "../styles/temp.png",
    answers: shuffle([
      { text: "Kelly", character: "Kelly" },
      { text: "Keith", character: "Keith" },
      { text: "Jilly", character: "Jilly" },
      { text: "Penguin", character: "Penguin" },
    ]),
  },
  {
    question: "What is your ideal weekend activity?",
    image: "/images/weekend.jpg",
    answers: shuffle([
      { text: "Exploring nature", character: "Kelly" },
      { text: "Working on a new project", character: "Keith" },
      { text: "Hanging out with friends", character: "Jilly" },
      { text: "Relaxing with a book", character: "Penguin" },
    ]),
  },
  {
    question: "Which animal do you relate to the most?",
    image: "/images/animal.jpg",
    answers: shuffle([
      { text: "Eagle", character: "Kelly" },
      { text: "Wolf", character: "Keith" },
      { text: "Dolphin", character: "Jilly" },
      { text: "Penguin", character: "Penguin" },
    ]),
  },
  {
    question: "What's your go-to drink?",
    image: "/images/drink.jpg",
    answers: shuffle([
      { text: "Green tea", character: "Kelly" },
      { text: "Black coffee", character: "Keith" },
      { text: "Fruity smoothie", character: "Jilly" },
      { text: "Hot chocolate", character: "Penguin" },
    ]),
  },
];

function shuffle(array: { text: string; character: string }[]) {
  return array.sort(() => Math.random() - 0.5);
}

const Quiz: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<string | null>(null);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswer = (character: string) => {
    setAnswers((prev) => ({
      ...prev,
      [character]: (prev[character] || 0) + 1,
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const mostAlignedCharacter = Object.entries(answers).reduce((a, b) =>
        b[1] > (a[1] || 0) ? b : a
      )[0];
      setResult(mostAlignedCharacter);
    }
  };

  return (
    <div className="quiz-container">
      {!quizStarted ? (
        <button className="start-btn" onClick={startQuiz}>
          Start Quiz
        </button>
      ) : result ? (
        <div className="result">
          <h3>You are most like {result}!</h3>
        </div>
      ) : (
        <div className="question-card">
          <img
            src={questions[currentQuestion].image}
            alt="Question visual"
            className="question-image"
          />
          <h2>{questions[currentQuestion].question}</h2>
          <div className="answers">
            {questions[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                className="answer-btn"
                onClick={() => handleAnswer(answer.character)}
              >
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
