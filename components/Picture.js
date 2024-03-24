import React from 'react'

const Picture = ({data}) => {
    //在homepage獲取的data
  return (
    <div className='picture'>
      <p>{data.photographer}</p>
      <div className='imageContainer'>
        <img src={data.src.large} alt=''></img>
      </div>
    <p>Download Image: <a target='_blank' href={data.src.large}>Click Here</a></p>
    </div>
  )
}

export default Picture
