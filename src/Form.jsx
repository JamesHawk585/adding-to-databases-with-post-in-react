import React from 'react'
import './index.css'


// 1. Make a form that will update our json server
// 2. Change state when update occurs
// 3. Use controlled inputs 

const Form = ({ handleSubmit }) => {


  return (
    <div>
    <section className="form-container">
      <h1 className="new-avenger-h1">New Avenger</h1>
      <form action="" className="avengers-form" onSubmit={(e) => handleSubmit(e)}>
        <input placeholder='Avenger Name' type="text"></input>
        <input placeholder="Real Name:" type="password"></input>
        <input placeholder="First Appearence" type="text"></input>
        <input placeholder="Powers" type="text"></input>
        <input placeholder="Image" type="text"></input>
        <button className="button">Create New Avenger</button>
      </form>
    </section>
    </div>
  )
}

export default Form