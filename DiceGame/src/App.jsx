import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero'
import Main from './Components/Main';

const App = () => {
  const [nextPage,setNextPage] = useState(false);
  return (
    <div>
      {nextPage ? <Main/> : <Hero nextPage={nextPage} setNextPage={setNextPage}/>}
    </div>
  )
}

export default App