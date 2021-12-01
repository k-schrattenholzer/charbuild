import React from 'react'

export default function Display({sayings, count}) {
  return (
    <div className='Display'>
      <p>you've added {count} thoughts</p>
      <h3>the brain bucket</h3>
      {sayings.map((saying) => (
          <p key={saying}>{saying}</p>
      ))}
      
    </div>
  )
}
