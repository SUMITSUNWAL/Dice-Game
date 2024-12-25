const Numbers = (props) => {
  return (
    <div>
      <button className="border border-black px-6 py-4 hover:bg-gray-600 hover:text-white">{props.num}</button>
    </div>
  )
}

export default Numbers