import React, { useState } from "react";
import "./index.css";

const Form = ({ handleSubmit }) => {
  const [value, setValue] = useState({
    name: "",
    realName: "",
    firstAppearence: "",
    image: "",
    powers: "",
  });

  const handleChange = (e) => {
    const ourInput = e.target.name
    console.log(e.target.value)
    setValue({ ...value, [ourInput]: e.target.value});
  };

  const handleReset = () => setValue({
    name: "",
    realName: "",
    firstAppearence: "",
    image: "",
    powers: ""
  })


  // Needs form reset
  // 15:17

  return (
    <div>
      <section className="form-container">
        <h1 className="new-avenger-h1">New Avenger</h1>
        <form
          action=""
          className="avengers-form"
          onSubmit={(e) => handleSubmit(e, handleReset)}
        >
          <input
          name="name"
            placeholder="Avenger Name"
            type="text"
            label="Avenger Name"
            onChange={handleChange}
            value={value.name}
          ></input>
          <input
          name="realName"
            placeholder="Real Name"
            type="password"
            onChange={handleChange}
            value={value.realName}
          ></input>
          <input
          name="firstAppearence"
            placeholder="First Appearence"
            type="text"
            onChange={handleChange}
            value={value.firstAppearence}
          ></input>
          <input
          name="powers"
            placeholder="Powers"
            type="text"
            onChange={handleChange}
            value={value.powers}
          ></input>
          <input
          name="image"
            placeholder="Image"
            type="text"
            onChange={handleChange}
            value={value.image}
          ></input>
          <button className="button">Create New Avenger</button>
        </form>
      </section>
    </div>
  );
};

export default Form;
