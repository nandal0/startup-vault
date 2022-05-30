import React from 'react'

const DelCard = ({img,title,content}) => {
  return (
    <div className="DelCard">
        <div className="slide">
            <img src={img} classalt="" />
            <p>{title}</p>
          </div>
          <div className="content">
              <p>{content}</p>
          </div>
    </div>
  )
}

export default DelCard