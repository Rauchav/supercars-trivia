import { useState, useEffect } from "react";
import { questions } from "./data/questions";
import WelcomePage from "./components/WelcomePage";
import DataCaptureModal from "./components/DataCaptureModal";
import QuestionPage from "./components/QuestionPage";
import ResultsPage from "./components/ResultsPage";
import ClosurePage from "./components/ClosurePage";
import { GOOGLE_SCRIPT_URL, CONFIG } from "./config/googleSheets";
import "./App.css";

function App() {
  const [gameState, setGameState] = useState("welcome"); // welcome, dataCapture, question, results, closure
  const [userData, setUserData] = useState(null);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Function to select 3 random questions
  const selectRandomQuestions = () => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  // Start game function
  const startGame = () => {
    setShowModal(true);
  };

  // Handle data capture submission
  const handleDataSubmit = (data) => {
    setUserData(data);
    setSelectedQuestions(selectRandomQuestions());
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowModal(false);
    setGameState("question");
  };

  // Handle answer selection
  const handleAnswerSelect = (answer) => {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correct;

    const newAnswer = {
      questionId: currentQuestion._id,
      selectedAnswer: answer,
      isCorrect: isCorrect,
      feedback: currentQuestion.feedback,
    };

    setUserAnswers([...userAnswers, newAnswer]);
    setGameState("results");
  };

  // Function to send participant data to Google Sheets (only after quiz completion)
  const sendDataToGoogleSheets = async (userData, userAnswers) => {
    if (
      !CONFIG.ENABLE_GOOGLE_SHEETS ||
      !GOOGLE_SCRIPT_URL ||
      GOOGLE_SCRIPT_URL === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE"
    ) {
      console.warn("Google Sheets integration is disabled or not configured");
      return;
    }

    const score = userAnswers.filter((answer) => answer.isCorrect).length;

    const participantData = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
      email: userData.email,
      region: userData.region,
      score: score,
    };

    // DEBUG: Log the data being sent
    console.log("DEBUG: Sending data to Google Sheets:", participantData);
    console.log("DEBUG: Region value:", participantData.region);
    console.log("DEBUG: Region type:", typeof participantData.region);

    try {
      // Use URL parameters with GET method to avoid CORS issues
      const params = new URLSearchParams();
      Object.keys(participantData).forEach((key) => {
        params.append(key, String(participantData[key]));
      });

      const url = `${GOOGLE_SCRIPT_URL}?${params.toString()}`;

      // Create a hidden iframe to send data silently
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = url;
      document.body.appendChild(iframe);

      // Remove the iframe after a short delay
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);

      console.log("DEBUG: Data sent to Google Sheets (silent mode)");
    } catch (error) {
      console.error("Error sending data to Google Sheets:", error);
    }
  };

  // Handle next question or finish game
  const handleNext = () => {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setGameState("question");
    } else {
      // Send participant data to Google Sheets when quiz is complete
      if (userData && userAnswers.length > 0) {
        sendDataToGoogleSheets(userData, userAnswers);
      }
      setGameState("closure");
    }
  };

  // Restart game
  const restartGame = () => {
    setGameState("welcome");
    setUserData(null);
    setSelectedQuestions([]);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowModal(false);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="app">
      {gameState === "welcome" && <WelcomePage onStartGame={startGame} />}

      {showModal && (
        <DataCaptureModal onSubmit={handleDataSubmit} onClose={closeModal} />
      )}

      {gameState === "question" && selectedQuestions.length > 0 && (
        <QuestionPage
          question={selectedQuestions[currentQuestionIndex]}
          onAnswerSelect={handleAnswerSelect}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={selectedQuestions.length}
        />
      )}

      {gameState === "results" && userAnswers.length > 0 && (
        <ResultsPage
          answer={userAnswers[userAnswers.length - 1]}
          onNext={handleNext}
          isLastQuestion={currentQuestionIndex === selectedQuestions.length - 1}
        />
      )}

      {gameState === "closure" && (
        <ClosurePage userAnswers={userAnswers} onRestart={restartGame} />
      )}
    </div>
  );
}

export default App;
