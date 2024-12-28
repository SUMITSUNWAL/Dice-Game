import { useState } from "react"

const Brainy = ({pictureValue,setPictureValue,setScore,userChoice}) => {
  const [hide,setHide] = useState(true);

  function randomNumber (){
    let number =  Math.floor(Math.random() * 6) + 1;
    console.log(number);
     return number;
  }
  
  function generate(){
    const data = randomNumber();
    setPictureValue(data);
    if (userChoice === data) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setScore((prevScore) => prevScore - 1);
    }
  }

  return (
    <div>
    <div className="flex flex-col justify-center items-center mt-[70px]">
    <div>
      <img src={`/images/D${pictureValue}.png`} className="w-[200px]"
      onClick={generate}></img>

      <p className="text-[20px] font-bold ml-2">Click on Dice to roll</p>
    </div>
    <div className="flex flex-col mt-10 gap-5">
        <button className="border border-black px-12 py-1 rounded-md  hover:bg-black hover:text-white transform transition-all duration-150 active:scale-95"
        onClick={ ()=>{
          setScore(0);
        }}>Reset Score</button>
        <button className="px-12 py-1 border border-black bg-black text-white rounded-md hover:bg-gray-700  transform transition-all duration-150 active:scale-95" onClick={ () => {
          setHide(!hide)
        }}>Show/Hide Rules</button>
    </div>
    </div>

    {hide ? <div className="flex justify-center items-center mt-4"><span className="bg-red-100 p-3">
      <h2 className="font-bold text-[22px] mb-2">How to play dice game</h2>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>after click on  dice  if selected number is equal to dice number you will get 1 point or gonna lose 1 point</p>
    </span></div>: <div></div>}
    </div>
  )
}

export default Brainy