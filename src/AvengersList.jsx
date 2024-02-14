import React from 'react'
import Card from './Card'

export default function AvengersList( {avengers} ) {
  const team = avengers.map(avenger => {
    const { name, image, powers, real_name, first_appearence } = avenger
    return <Card
      key={name}
      name={name}
      powers={powers}
      image={image}
      real_name={real_name}
      first_appearence={first_appearence}
      />
  })


  return (
    <>
      {team}
    </>
  )
}

