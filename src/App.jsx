import './App.css'

import Root from './components/Root'
import Brother from './components/Brother'

import { useState, useEffect } from 'react'
const App = () => {
  const[money,setMoney] = useState(10000);
  const [start,setStart] = useState(Date.now());


  

  return (
    <>
      <Root money={money} start={start}/>
      <Brother money={money} start={start}/>
    </>

  )
}

export default App