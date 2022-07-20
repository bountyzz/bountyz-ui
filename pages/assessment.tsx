import questions from "../questions.json";
import { useState } from "react";
import { useRouter } from "next/router";
import getConfig from 'next/config'
import { useStore } from "../services/store";
import Button from "../components/button";
import { createFlow, updateFlow } from "../hooks/useSFsdk";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [scorePercentage, setScorePercentage] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState(false);
  const router = useRouter();
  const { publicRuntimeConfig } = getConfig()
  const { state: { contract, wallet}, } = useStore();
  const { courseID } = router.query;
  const { courseBounty } = router.query;
  let cid:string = {courseID}.courseID as string;
  let bounty:string = {courseBounty}.courseBounty as string;
  

  const handleAnswerOption = (answer) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ]);
    setSelectedOptions([...selectedOptions]);
    console.log(selectedOptions);
  };

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < questions.length && setCurrentQuestion(nextQues);
  };

  const handleSubmitButton = () => {
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      questions[i].answerOptions.map(
        (answer) =>
          answer.isCorrect &&
          answer.answer === selectedOptions[i]?.answerByUser &&
          (newScore += 1)
      );
    }
    setScore(newScore);
    setShowScore(true);

    // Calculate percentage
    let scorePercentageVal = ( newScore / questions.length ) * 100;
    setScorePercentage(scorePercentageVal);

    // Evaluate assessment result
    if (scorePercentageVal >= publicRuntimeConfig.AssessmentPassPercentage) {
      setAssessmentResult(true);
    }
  };

  // Called when assessment is cleared
  const assessmentPassed = async (_cid: number, _bounty: number) => {

    //Invoke streaming rewards for the employee
    //courseAmt * 0.00029
    //const bountyAmt = parseFloat("60");
    console.log("Inside assessement, bounty="+_bounty);
    const totalBountyValue = await contract.getTotalCourseBountyValue(wallet);
    console.log("Inside assessement, bounty=" + totalBountyValue);
    if(totalBountyValue > 0) {
      let bountyValue = totalBountyValue + _bounty;
      console.log("update flow if cond: " + bountyValue);
      updateFlow(wallet, bountyValue);
    } else {
      console.log("create flow if cond: " + _bounty)
      createFlow(wallet, _bounty);
    }
    await contract.completeCourse(_cid);
    router.push("/employee");
  }

  // Called when assessment is not cleared
  const assessmentFailed = async () => {
    router.push("/employee");
  }

  return (
    <div className="flex flex-col px-5 bg-[#006400] justify-center items-center">
      {showScore ? (
        <div>
          <h1 className="text-md font-semibold text-center text-white">
            You scored {score} out of {questions.length}
          </h1>
          <br/>
          <div>
            <h1 className="text-md font-semibold text-center text-white">
              {assessmentResult ? "Congrats! You have successfully cleared this assessment!" 
              : "Sorry! You have not scored enough to clear this assessment."}
            </h1>
          </div>
          <br/>
          <div className ="flex justify-center"> 
            <Button
              className="text-md w-full rounded-md flex justify-end mt-4"
              onClick={() => (assessmentResult ? assessmentPassed(parseInt(cid, 0), parseInt(bounty, 0)) : assessmentFailed())}>
              <div className="flex items-center">
                <span className="font-medium text-base">
                  Done
                </span>
              </div>
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-start w-full">
            <h4 className="mt-10 text-xl text-white/60">
              Question {currentQuestion + 1} of {questions.length}
            </h4>
            <div className="mt-4 text-2xl text-white">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="flex flex-col w-full">
            {questions[currentQuestion].answerOptions.map((answer, index) => (
              <div
                key={index}
                className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-white/10 rounded-xl bg-white/5"
                onClick={(e) => handleAnswerOption(answer.answer)}
              >
                <input
                  type="radio"
                  name={answer.answer}
                  value={answer.answer}
                  checked={
                    answer.answer ===
                    selectedOptions[currentQuestion]?.answerByUser
                  }
                  onChange={(e) => handleAnswerOption(answer.answer)}
                  className="w-6 h-6 bg-black"
                />
                <p className="ml-6 text-white">{answer.answer}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between w-full mt-4 text-white">
            <button
              onClick={handlePrevious}
              className="w-[49%] py-3 bg-[#4682B4] rounded-lg mb-6"
            >
              Previous
            </button>
            <button
              onClick={
                currentQuestion + 1 === questions.length
                  ? handleSubmitButton
                  : handleNext
              }
              className="w-[49%] py-3 bg-[#4682B4] rounded-lg mb-6"
            >
              {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
