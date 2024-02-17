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

  const handleEdit = () => {
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

    const handleSubmit = (e, handleReset) => {
      console.log("handleSumbit()")
      e.preventDefualt()
      handleEditAvenger()
    }

  return (
    <section className="card">
      {editToggle ? (
        <>
          <form
            action=""
            className="avengers-form"
            onSubmit={() => handleEditAvenger()}
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
            <button className="button">Edit Avenger</button>
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
            onClick={() => handleEdit()}
          >
            Edit
          </button>
        </>
      )}
    </section>
  );
};
