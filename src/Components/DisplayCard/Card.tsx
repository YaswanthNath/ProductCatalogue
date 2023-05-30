import React from 'react'

export default function Card({prod}:any) {
  return (
    <div>
      {/* <img /> */}
      <h1>Title {prod.name}</h1>
      <p>Description {prod.quantity}</p>
      <p>Price {prod.cost}</p>
    </div>
  )
}