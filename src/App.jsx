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
    e.preventDefault();
    console.log(e.target[0].value);
    const newAvenger = {
      name: e.target[0].value,
      real_name: e.target[1].value,
      first_appearence: e.target[2].value,
      image: e.target[3].value,
      powers: e.target[4].value,
    };
    setAvengers((prevAvengers) => [...prevAvengers, newAvenger]);

    addAvenger();
    // Why is console.log always one submit behind?
  };

  // POST request here
  const addAvenger = async () => {
    console.log("Adding Avenger!🦸‍♂️");
    const response = await fetch(backend_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(/*Whatever*/),
    }).then((r) => r.json());
    // Code to add avenger to state.
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
