import React from 'react'

const Card = ({heading,title}) => {
  return (
    <div className="card">
        <p>
        {heading}
        </p>
        <h2>
       {title}
        </h2>
    </div>
  )
}

export default Card