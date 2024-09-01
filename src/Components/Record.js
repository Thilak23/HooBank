import React from 'react'
import './Styles/record.css';

const Record = () => {
  return (
    <div>
      <div className="record">
        <div className='user'>
          <p className='user-1'>4800+</p>
          <p className='user-2'>ACTIVE USERS</p>
        </div>
        <div className='trust'>
          <p className='trust-1'>230+</p>
          <p className='trust-2'>TRUST BY COMPANY</p>
        </div>
        <div className='trans'>
          <p className='trans-1'>$230M+</p>
          <p className='trans-2'>TRANSACTION</p>
        </div>
      </div>
    </div>
  )
}

export default Record