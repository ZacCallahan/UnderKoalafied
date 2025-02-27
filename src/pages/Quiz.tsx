import React, { useState } from "react";
import Question1 from "../assets/Question1.png";
import Question2 from "../assets/Question2.png";
import Question3 from "../assets/Question3.png";
import Question4 from "../assets/Question4.png";
import Question5 from "../assets/Question5.png";
import Question6 from "../assets/Question6.png";
import Question7 from "../assets/Question7.png";
import Question8 from "../assets/Question8.png";
import Question9 from "../assets/Question9.png";
import Question10 from "../assets/Question10.png";

import JillyImage from "../assets/JillyResult.png";
import KeithImage from "../assets/Keith.png";
import KellyImage from "../assets/Kelly.png";
import PenguinImage from "../assets/Penguin.png";
import EchidnaImage from "../assets/Echidna.png";

import "../styles/Quiz.css";

interface Question {
  question: string;
  image: string;
  answers: { text: string; character: string }[];
}

const characterResults: Record<string, { image: string; description: string }> =
  {
    Jilly: {
      image: JillyImage,
      description:
        "Jilly is dumb as a bag of rocks but as loyal as she is sexual",
    },
    Keith: {
      image: KeithImage,
      description: "Keith is confident and social, to a fault.",
    },
    Kelly: {
      image: KellyImage,
      description: "Kelly is her own worst enemy.",
    },
    Penguin: {
      image: PenguinImage,
      description: "Penguin knows best, listen to the Penguin.",
    },
    Echidna: {
      image: EchidnaImage,
      description: "Echidna is an enigma. The shapes must be thrown.",
    },
  };

const questions: Question[] = [
  {
    question: "I do personality quizzes because:",
    image: Question1,
    answers: shuffle([
      { text: "I crave the approval of a robot", character: "Jilly" },
      { text: "It fills time at work", character: "Keith" },
      { text: "I struggle with my sense of identity", character: "Kelly" },
      {
        text: "The doctor refuses to speak to me about my personality disorder",
        character: "Penguin",
      },
    ]),
  },
  {
    question: "My friends would describe me as?",
    image: Question2,
    answers: shuffle([
      { text: "Introverted and depressive", character: "Kelly" },
      { text: "Confident and outgoing", character: "Keith" },
      { text: "Kind and compassionfruit", character: "Jilly" },
      {
        text: "Seemingly trapped in a silent disco of my own creation",
        character: "Echidna",
      },
    ]),
  },
  {
    question: "What is your ideal post-work beverage?",
    image: Question3,
    answers: shuffle([
      { text: "Hobo-Rosé", character: "Kelly" },
      { text: "A baker’s dozen of tinnies", character: "Keith" },
      { text: "Three quarts of dingo semen", character: "Jilly" },
      { text: "Water", character: "Penguin" },
    ]),
  },
  {
    question:
      "Your boss asks you to work Sunday at no extra pay. What is your response?",
    image: Question4,
    answers: shuffle([
      { text: "Nah", character: "Kelly" },
      { text: "Yeah, Nah", character: "Keith" },
      { text: "Yeah", character: "Jilly" },
      {
        text: "Young people just don’t want to work anymore",
        character: "Penguin",
      },
    ]),
  },
  {
    question: "What is the most important part of a relationship?",
    image: Question5,
    answers: shuffle([
      { text: "Trust and communication", character: "Kelly" },
      { text: "Fun and adventure", character: "Keith" },
      { text: "Butt Stuff", character: "Jilly" },
      { text: "Respect for the patriarchy", character: "Penguin" },
    ]),
  },
  {
    question: "What is your favourite piece of music?",
    image: Question6,
    answers: shuffle([
      { text: "The Roof Seal jingle circa 2002", character: "Kelly" },
      {
        text: "Sizzurp Dick Swag – Nasty Dank (feat. Big Snurp, 69$olla & Ya Twunk L0bz)",
        character: "Keith",
      },
      { text: "Symphony No. 11 – Johann Brahgner", character: "Jilly" },
      {
        text: "Elation – ElecMau5 x Dorbnoffer (Extended White Label Car Boot Mix)",
        character: "Echidna",
      },
    ]),
  },
  {
    question: "Describe your ideal night out",
    image: Question7,
    answers: shuffle([
      {
        text: "Staying in to grapple with existential dread",
        character: "Kelly",
      },
      { text: "Cracking open cold ones with the boys", character: "Keith" },
      {
        text: "Getting stuffed like a Christmas ham down at the docks",
        character: "Jilly",
      },
      {
        text: "Shelving pingers for an all night dance party",
        character: "Echidna",
      },
    ]),
  },
  {
    question: "What is your dream job?",
    image: Question8,
    answers: shuffle([
      {
        text: "I don’t dream about work, I dream about freedom",
        character: "Kelly",
      },
      { text: "International Musical Icon", character: "Keith" },
      { text: "Sperm Bank Janitor", character: "Jilly" },
      {
        text: "Colonial Governor of Hindustan under the British Raj",
        character: "Penguin",
      },
    ]),
  },
  {
    question: "What is the biggest problem for the future of the Earth?",
    image: Question9,
    answers: shuffle([
      { text: "Late Stage Capitalism", character: "Kelly" },
      { text: "Climate Change and Deforestation", character: "Keith" },
      { text: "Unplanned pregnancies", character: "Jilly" },
      { text: "The Youth of Today", character: "Penguin" },
    ]),
  },
  {
    question:
      "If a tram is heading towards five baby koalas and you can pull a lever to divert it towards just one baby koala what would you do?",
    image: Question10,
    answers: shuffle([
      {
        text: "Go have a drink, they’ll all die eventually anyway",
        character: "Kelly",
      },
      { text: "Leave that lever! Manifest destiny", character: "Keith" },
      { text: "Pull that lever! It’s a numbers game", character: "Jilly" },
      { text: "Invest in koala coffins", character: "Penguin" },
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
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
  };

  const handleAnswer = (character: string) => {
    setAnswers((prev) => ({
      ...prev,
      [character]: (prev[character] || 0) + 1,
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      determineResult();
    }
  };

  const determineResult = () => {
    const mostAlignedCharacter = Object.entries(answers).reduce((a, b) =>
      b[1] > (a[1] || 0) ? b : a
    )[0];

    setResult(mostAlignedCharacter);
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
          {result && characterResults[result] && (
            <>
              <img
                src={characterResults[result].image}
                alt={result}
                className="result-image"
              />
              <p className="result-description">
                {characterResults[result].description}
              </p>
            </>
          )}
          <button className="restart-btn" onClick={startQuiz}>
            Try Again
          </button>
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
