const Numbers = (props) => {

  function userSelectedNumber(){
    props.setUserChoice(props.num);
    props.setSelected(props.num);
  }

  return (
    <div>
      <button className={`border border-black px-6 py-4 hover:bg-gray-600 hover:text-white
      ${props.selected === props.num ? "bg-gray-600 text-white" : ""}`}
      onClick={userSelectedNumber}
      >{props.num}</button>
    </div>
  )
}

export default Numbers