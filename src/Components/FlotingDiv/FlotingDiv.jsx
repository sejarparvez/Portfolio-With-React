import React from 'react'

const FlotingDiv = ({image, txt1, txt2}) => {
  return (
<div className=" place-content-around flex bg-white shadow-xl rounded-[17px] items-center pr-8 h-[4.5rem]">
    <img src={image} className=' scale-[0.4]' alt="images" />
    <span className=' font-sans text-base text-black'>{txt1} <br/> {txt2}</span>
</div>
    )
}

export default FlotingDiv