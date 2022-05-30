import React from 'react'

const Item = ({image,title,content}) => {
  return (
    <div className="item-container">
        {/* <img src={image} alt="" /> */}
        <h2>
           {title}
        </h2>
        <p>{content}</p>
    </div>
  )
}

export default Item