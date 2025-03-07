import React from 'react'
import './smallCard.css'

function SmallCard({title, text, backgroundClass}) {
  return (
    <div className={`small-card-container ${backgroundClass}`}>
      <div className="card-blob"></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
      
  
  )
}

export default SmallCard