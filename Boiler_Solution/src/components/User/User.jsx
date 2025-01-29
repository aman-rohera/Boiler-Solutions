import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='inline-block bg-orange-700 text-white text-3xl px-4 py-2 rounded-3xl'>User : {userid}</div>
  )
}

export default User