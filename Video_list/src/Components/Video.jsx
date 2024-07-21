import React from 'react'

const Video = () => {
  return (
    <>
    <div className='video'>
        <img src='' alt='title'/>
        <div className='video-info'>
            <h2>title</h2>
            <p>description</p>
            <a href='url' target='0' rel='noopener noreferrer'>Watch Video</a>
        </div>
      
    </div>


    <video width='640px' height='360px' controls><source src='https://www.youtube.com/watch?v=R3SHDFssDwg'></source></video>
    </>
  )
}

export default Video
