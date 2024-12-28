import { useState } from "react"
import Brainy from "./Brainy"
import Numbers from "./Numbers"

const Main = () => {
  const [userChoice,setUserChoice] = useState();
  const [pictureValue,setPictureValue] = useState(1);
  const [score,setScore] = useState(0);

  function scoreCalc(){
    if(userChoice === pictureValue){
      setScore(s => s+1);
    }
    else{
      setScore(s => s-1);
    }
  }

  return (
    <div>
      <div className="flex justify-between ml-5 mr-5 items-center mt-5">
        <div className="flex flex-col justify-center items-center mt-[-25px]">
          <p className=" font-bold text-[90px] leading-none">{score}</p>
          <p className="text-[20px] leading-none font-bold">Total Score</p>
        </div>
        <div>
          <div className="flex gap-5">
            <Numbers num={1} setUserChoice={setUserChoice} />
            <Numbers num={2} setUserChoice={setUserChoice} />
            <Numbers num={3} setUserChoice={setUserChoice} />
            <Numbers num={4} setUserChoice={setUserChoice} />
            <Numbers num={5} setUserChoice={setUserChoice} />
            <Numbers num={6} setUserChoice={setUserChoice} />
          </div>
          <p className="font-bold text-[20px] flex justify-end mt-2">Select Number</p>
        </div>
      </div>

      <div>
        <Brainy pictureValue={pictureValue} setPictureValue={setPictureValue}/>
      </div>
      
    </div>
  )
}

export default Main