import React from 'react'
import './styles.css';

function ItemList({title, description}) {
  return (
    <div className="itemList">
        <strong>{title}</strong>
        <p>{description}</p>
        <hr></hr>
    </div>
  )
}

export default ItemList;