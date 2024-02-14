import { useState, useEffect } from "react";
import "./index.css";
import AvengersList from "./AvengersList";
import Form from "./Form";

const backend_url = "http://localhost:3000/avengers";

function App() {
  const [avengers, setAvengers] = useState([]);

  // await keyword is similar to .then

  const assembleAvengers = async () => {
    const response = await fetch(backend_url).then(
      (r) => r.json() /* If it fails, failFunction()*/
    );
    setAvengers(response);
  };

  useEffect(() => {
    assembleAvengers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    const newAvenger = {
      // id: 1,
      name: e.target[0].value,
      real_name: e.target[1].value,
      first_appearence: e.target[2].value,
      image: e.target[3].value,
      powers: e.target[4].value
    }

    setAvengers(prevAvengers => [...prevAvengers, newAvenger])
    // Why is console.log always one submit behind? 
    console.log(avengers)
  };

  return (
    <>
      <Form handleSubmit={handleSubmit} />
      <section className="container">
        <AvengersList avengers={avengers} />
      </section>
    </>
  );
}

export default App;
