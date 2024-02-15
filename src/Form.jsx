import React, { useState } from "react";
import "./index.css";

const Form = ({ handleSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

// Add onChange to each input jsx element.
// 1:29:47  

  return (
    <div>
      <section className="form-container">
        <h1 className="new-avenger-h1">New Avenger</h1>
        <form
          action=""
          className="avengers-form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            placeholder="Avenger Name"
            type="text"
            label="Avenger Name"
            onChange={handleChange}
            value={value}
          ></input>
          <input placeholder="Real Name" type="password"></input>
          <input placeholder="First Appearence" type="text"></input>
          <input placeholder="Powers" type="text"></input>
          <input placeholder="Image" type="text"></input>
          <button className="button">Create New Avenger</button>
        </form>
      </section>
    </div>
  );
};

export default Form;
