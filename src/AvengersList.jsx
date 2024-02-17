import React from 'react'
import Card from './Card'

export default function AvengersList( {avengers, handleDelete} ) {
  const team = avengers.map(avenger => {
    const { name, image, powers, real_name, first_appearence, id } = avenger

    return <Card
      key={name}
      name={name}
      powers={powers}
      image={image}
      real_name={real_name}
      first_appearence={first_appearence}
      handleDelete={handleDelete}
      avenger_id={id}
      />
  })


  return (
    <>
      {team}
    </>
  )
}

