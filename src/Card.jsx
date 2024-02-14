import React, { useEffect, useState } from 'react'

export default ({ name, real_name, powers, first_appearence, image }) => {

  return (
    <section className="card">
      <h1 className="name">{name}</h1>
      <p className="real-name">Secret Identity: {real_name}</p>
      <p className="first-appearence">First Appearence: {first_appearence}</p>
      <p className="powers">Powers: {powers}</p>
      <img className="image" src={image} alt={name}></img>
    </section>
  )
}
