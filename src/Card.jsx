import React, { useContext, useState } from "react";

export default ({
  name,
  real_name,
  powers,
  first_appearence,
  image,
  avenger_id,
  handleDelete,
  handleEditAvenger,
}) => {
  const [editToggle, setEditToggle] = useState(false);
    const [value, setValue] = useState({
      name,
      real_name,
      firstAppearence: first_appearence,
      image,
      powers,
    });

  const handleEditToggle = () => {
    setEditToggle(true);
  };
  
    const handleChange = (e) => {
      const ourInput = e.target.name
      console.log(e.target.value)
      setValue({ ...value, [ourInput]: e.target.value});
    };
  
    const handleReset = () => setValue({
      name,
      real_name,
      first_appearence,
      image,
      powers
    })

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e)
      handleEditAvenger(e, handleReset, avenger_id);
    }

  return (
    <section className="card">
      {editToggle ? (
        <>
          <form
            action=""
            className="avengers-form"
            onSubmit={(e) => handleSubmit(e)}
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
              name="real_name"
              placeholder="Real Name"
              type="password"
              onChange={handleChange}
              value={value.real_name}
            ></input>
            <input
              name="first_appearence"
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
            <button className="editAvengerButton" onSubmit={(e) => handleSubmit(e)}>Edit Avenger</button>
            {/* <button name="backToCardFromEditFormButton" className="backToCardFromEditFormButton" onClick={() => handleEditToggle()}>Card</button> */}
          </form>
        </>
      ) : (
        <>
          <img className="card-image" src={image} alt={name}></img>
          <h1 className="name">{name}</h1>
          <p className="real-name">Secret Identity: {real_name}</p>
          <p className="first-appearence">
            First Appearence: {first_appearence}
          </p>
          <p className="powers">Powers: {powers}</p>
          <button
            name="delete"
            className="deleteButton"
            onClick={() => handleDelete(avenger_id)}
          >
            Delete Avenger
          </button>
          <button
            name="edit"
            className="editButton"
            onClick={() => handleEditToggle()}
          >
            Edit
          </button>
        </>
      )}
    </section>
  );
};
