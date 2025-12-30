import { useState } from 'react'
import Card from './card/Card'
import './App.css'

function App() {
  const [name, setName] = useState('')

  return (
    <>
      <div>
        <Card  tittle ="card1" name={name} setName={setName} />
         <Card tittle="card1" name={name} setName={setName} />
        
        {/* <p>{name}</p> */}
      </div>
    </>
  )
}

export default App
