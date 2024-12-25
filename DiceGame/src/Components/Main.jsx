import Brainy from "./Brainy"
import Numbers from "./Numbers"

const Main = () => {
  return (
    <div>
      <div className="flex justify-between ml-5 mr-5 items-center mt-5">
        <div className="flex flex-col justify-center items-center mt-[-25px]">
          <p className=" font-bold text-[90px] leading-none">0</p>
          <p className="text-[20px] leading-none font-bold">Total Score</p>
        </div>
        <div>
          <div className="flex gap-5">
            <Numbers num={1}/>
            <Numbers num={2}/>
            <Numbers num={3}/>
            <Numbers num={4}/>
            <Numbers num={5}/>
            <Numbers num={6}/>
          </div>
          <p className="font-bold text-[20px] flex justify-end mt-2">Select Number</p>
        </div>
      </div>

      <div>
        <Brainy/>
      </div>
      
    </div>
  )
}

export default Main