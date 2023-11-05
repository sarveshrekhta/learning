"use client";

import React from "react";
import { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "../../styles/viewer/quiz.css"
import "../../styles/viewer/quizResult.css"
export default function Quiz({ QuizDataProps, continueLearning}) {
  const data = QuizDataProps || {};

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAns, setcorrectAns] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [disabled, setDisabled] = useState(false);

  useEffect(
    (option) => {
      if (timer > 0 && !showResult) {
        const countdown = setTimeout(() => {
          setTimer(timer - 1);
        }, 1000);
        // setCurrentQuestion(currentQuestion + 1);
        return () => clearTimeout(countdown);
      } else {
        if (currentQuestion + 1 != data.length) {
          setTimer(10);
          setTimeout(() => {
            setCurrentQuestion(currentQuestion + 1);
          }, 800);
        } else {
          setTimeout(() => {
            setShowResult(true);
          }, 800);
        }

        return;
      }
    },
    [timer, showResult]
  );

  const handleOptionSelect = (option, correctAns) => {
    //console.log(option, correctAns, "correctAnscorrectAnscorrectAnscorrectAns");
    if (option != correctAns) {
      setcorrectAns(correctAns);
    }
    if (showResult) return;

    setSelectedOption(option);

    if (option === data[currentQuestion].answers) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {

      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setSelectedOption("");
        setTimer(10);
      }, 800); // Wait for 1 second before moving to the next question
    } else {
      setTimeout(() => {
        setShowResult(true);
      }, 800);
    }
  };

  const skipQuestion = (option) => {
    setTimer(10);
    setCurrentQuestion(currentQuestion + 1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption("");
      setTimer(10);
    } else {
      setShowResult(true);
    }
  };

  function retryQuiz() {
    setScore(0)
    setCurrentQuestion(0)
    setShowResult(false)
  }



  return (
    <>
      <div>
        {showResult ? (

          <div className="quizSection quizResultSection">
            <div className="vcHeading">
              <div className="quizResult">
                <div className="resultPercentage">
                  <span>{score}/{data.length}</span>
                </div>
                <div className="greatJob">

                  {score == data.length ? <h4>Great job!</h4>
                    : (score <= data.length / 2 && score >= data.length / 3) ? <h4>Good Job!</h4> : score == 1 ? <h4>Need Improvement!</h4>
                      : <h4>Try again!</h4>}



                  <p>You have correctly answered {score} questions out of {data.length}</p>
                  <div className="groupBtn">
                    <button className="borderBtn" onClick={retryQuiz}>Retry</button>
                    <button className="primaryBtn border0" onClick={continueLearning}>Continue </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        ) : (
          <div>




            <div className="quizSection">


              <div className="vcHeading">
                <div className="quiz">
                  {/* <p>Time remaining: {timer} seconds</p> */}

                  {/* <ProgressBar completed={timer * 10} maxCompleted={100} dir={"rtl"} borderRadius={"3px"} height={"8px"} baseBgColor={'#E7B7D2'} transitionDuration={"0s"} bgColor={"#fff"} transitionTimingFunction={"linear"} /> */}

                  <div className="quizSkip">
                    <div><p><span>{currentQuestion + 1}</span>/{data.length}</p></div>
                    <div className="skip" onClick={skipQuestion}><p>Skip</p></div>
                  </div>
                  <div className="quizQuestionAnswer">
                    <p>{data[currentQuestion].questionText}</p>
                    <div className="quizOption1">

                      {
                        data[currentQuestion].options.map((option, index) => {
                          {
                            return (

                              <>
                                <button
                                  disabled={selectedOption !== ''}
                                  key={index}
                                  // className={isCorrect ? "correct" : ""}
                                  className={option === correctAns ? " currectAnswer rl-tick" : option === selectedOption
                                    ? option === data[currentQuestion].answers
                                      ? "currectAnswer rl-tick"
                                      : "wrong rl-tick"
                                    : "white"}
                                  onClick={() =>
                                    handleOptionSelect(
                                      option,
                                      data[currentQuestion].answers
                                    )
                                  }
                                // style={optionStyle}
                                // style={{
                                //   background:
                                //     option === selectedOption
                                //       ? option === data[currentQuestion].answers
                                //         ? "#AED179"
                                //         : "#FF8585"
                                //       : "white",
                                // }}
                                >
                                  {option}

                                </button>



                              </>
                            )
                          }

                        })}

                    </div>

                  </div>
                </div>

              </div>
            </div>


          </div>
        )}
      </div>
    </>
  );
}