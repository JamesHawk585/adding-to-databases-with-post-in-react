import React, { useContext,useState } from "react";

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

  const handleEdit = () => {
    console.log("handleEdit()")
    setEditToggle(true)
  }

  return (
    
    <section className="card">
      {editToggle ? <></> : <> 
      <img className="card-image" src={image} alt={name}></img>
      <h1 className="name">{name}</h1>
      <p className="real-name">Secret Identity: {real_name}</p>
      <p className="first-appearence">First Appearence: {first_appearence}</p>
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
      </>}
    </section>
)};
