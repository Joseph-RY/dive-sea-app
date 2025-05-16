import React from 'react'
import "./card.css"

const Card = ({img,name}) => {
  return (
    <div className='card'>
      <img className='w-[90%] m-auto rounded-2xl' src={img} alt="" />
      <h1 className='text-[30px]'>{name}</h1>
      <div className="sectioo">
        <div className="">
            <h4 className='seri'>Current bid</h4>
            <p>$1.75</p>
        </div>
        <button className='btnsiyax'>Place BID</button>
      </div>
    </div>
  )
}

export default Card
