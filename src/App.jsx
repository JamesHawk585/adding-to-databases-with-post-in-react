import { useState, useEffect, useContext, createContext } from "react";
import "./index.css";
import AvengersList from "./AvengersList";
import Form from "./Form";

const backend_url = "http://localhost:3000/avengers";

function App() {
  const [avengers, setAvengers] = useState([]);


  const assembleAvengers = async () => {
    const response = await fetch(backend_url).then(
      (r) => r.json());
    setAvengers(response);
  };

  useEffect(() => {
    assembleAvengers();
  }, []);

  const addAvenger = async (avengerData) => {
    const response = await fetch(backend_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(avengerData),
    }).then((r) => r.json());
    setAvengers([...avengers, response])
  };

  const handleSubmit = (e, handleReset) => {
    console.log(e)
    e.preventDefault();

    const newAvenger = {
      name: e.target[0].value,
      real_name: e.target[1].value,
      first_appearence: e.target[2].value,
      powers: e.target[3].value,
      image: e.target[4].value
    };

    console.log("newAvenger Obj:", newAvenger)

    addAvenger(newAvenger);

    handleReset()


  };

  const handleDelete = async (avenger_id) => { 
    setAvengers(avengers.filter(avenger => avenger.id !== avenger_id))
    const response = await fetch(`${backend_url}/${avenger_id}`, {method:  "DELETE"})
  }

  const handleEditAvenger = () => {
    console.log("handleEditAvenger()")
  }

  return (
    <>
      <Form handleSubmit={handleSubmit} />
      <section className="container">
        <AvengersList avengers={avengers} handleDelete={handleDelete} handleEditAvenger={handleEditAvenger}/>
      </section>
    </>
  );
}

export default App;
