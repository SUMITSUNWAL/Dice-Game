
const Hero = (props) => {
  return (
    <>
    <div className="flex items-center">
      <div>
        <img src="/images/Dice.png"></img>
      </div>
      <div className="flex flex-col relative">
        <p className="font-bold text-[90px] mb-5">DICE GAME</p>
        <button className="bg-black text-white h-[35px] min-w-[200px] rounded-md absolute right-0 bottom-0 hover:bg-gray-700"
        onClick={ () =>{
          props.setNextPage(true);
        }}>Play Now</button>
      </div>
    </div>
    </>
  )
}

export default Hero