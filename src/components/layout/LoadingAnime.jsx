import React from 'react'
import '../layout/assets/LoadingAnime.css'
const LoadingAnime = () => {
  return (
    <div className='mt-20 w-100'>
      <div className="loading-container">
        <div className="dash uno"></div>
        <div className="dash dos"></div>
        <div className="dash tres"></div>
        <div className="dash cuatro"></div>
      </div>
    </div>
  )
}

export default LoadingAnime