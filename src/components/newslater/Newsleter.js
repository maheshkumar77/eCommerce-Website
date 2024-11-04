import React from 'react'
import './newslater.css'
const Newsleter = () => {
  return (
    <div className='newslater'>
      <h1>Get Exclusive Ofeers On Your email</h1>
      <p>Subscribe to our newslater and stay updated</p>
      <div>
        <input type="text" placeholder='Your Email Id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsleter
