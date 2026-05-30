import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.image} alt="" />
      <div>
        <h2>{props.user}, {props.age}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint itaque doloribus asperiores officiis numquam eveniet?</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
