import React from 'react'
import './smallCard.css'

function SmallCard({title, text, smBackgroundClass, smIconClass}) {
  return (
    <>
    <div className="smcard-border">
      <div className="blackbackground">
    <div className={`small-card-container ${smBackgroundClass}`}>
      <div className="card-blob"></div>
      <div className="small-card-icon-wrapper">
        <div className={`small-card-icon ${smIconClass}`}></div>
        </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
    </div>
    </div>
    </>
      
  
  )
}

export default SmallCard