import React from 'react'
import "../styles/Menu.css"

function MenuItem({id,name,image,price,description}) {
  return (
    <div className="menuItem" key={id}>
    <img src={image} alt="Keroma loading" />
    <h2>{name}</h2>
    <p>{description}</p>
    <p>{price}</p>
    <button>Order</button>
  </div>
  )
}

export default MenuItem











