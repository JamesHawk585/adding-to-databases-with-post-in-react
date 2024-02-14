import { useState, useEffect } from 'react'
import './index.css'
import AvengersList from './AvengersList'
import Form from './Form'

const backend_url = "http://localhost:3000/avengers"

function App() {
  const [avengers, setAvengers] = useState([])

  // await keyword is similar to .then

  const assembleAvengers = async () => {
    const response = await fetch(backend_url).then(r => r.json()/* If it fails, failFunction()*/)
    setAvengers(response)
  }

  useEffect(() => {
    assembleAvengers()
  }, [])

  const handleSubmit = () => {
    console.log("Submit Clicked!")
  } 

  return (
    <section className="container">
      <AvengersList avengers={avengers}/>
    </section>
  )

}

export default App 