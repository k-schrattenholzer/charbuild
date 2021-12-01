import React from 'react';
import './Display.css';

export default function Display({sayings, count}) {
  return (
    <div className='Display'>
      <p
      className="Count"
      aria-label='count'>
        added {count} thoughts</p>

      <label
      aria-label='bucket'
      className='Thought-Container'
      >
        <h3>the brain bucket</h3>
        {sayings.map((saying) => (
            <p 
            className='Thought'
            key={saying}>{saying}</p>
        ))}
      </label>
      
    </div>
  )
}
