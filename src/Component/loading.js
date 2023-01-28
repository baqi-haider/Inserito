import React from 'react'
import Loading from './load.gif'

const loading = () => {
  return (
    <div>
      <div className='text-center'>
            <img className='my-3' src={Loading} alt="loading"  width="900" height="200" />
        </div>
    </div>
  )
}

export default loading
