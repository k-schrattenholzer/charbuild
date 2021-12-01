import React from 'react'

export default function Display({sayings, count}) {
  return (
    <div className='Display'>
      <p
      aria-label='count'>
        you've added {count} thoughts</p>

      <label
      aria-label='bucket'>
        <h3
        >the brain bucket</h3>
        {sayings.map((saying) => (
            <p key={saying}>{saying}</p>
        ))}
      </label>
      
    </div>
  )
}
