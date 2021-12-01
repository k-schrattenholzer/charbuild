import React from 'react';
import './Character.css'

export default function Character({head, mid, bottom, shoes}) {
  return (
    <div 
    style={{display:'flex', flexDirection:'column'}}
    className="Char-Container"
    >

      <article
      className='head'
      aria-label='head'
      style={{
        backgroundImage: `url(./head/${head}.png)`,
        height: 150,
        width: 150,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}></article>

      <article
      className='mid'
      aria-label='mid'
      style={{
        backgroundImage: `url(./middle/${mid}.png)`,
        height: 150,
        width: 150,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}></article>

      <article
      className='bottom'
      aria-label='bottom'
      style={{
        backgroundImage: `url(./bottom/${bottom}.png)`,
        height: 150,
        width: 150,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}></article>

      <article
      className='shoes'
      aria-label='shoes'
      style={{
        backgroundImage: `url(./shoes/${shoes}.png)`,
        height: 150,
        width: 150,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}></article>

    </div>
  )
}
