import React from 'react'

export default function Character({head, mid, bottom, shoes}) {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>

      <article
      className='head'
      style={{
        backgroundImage: `url(./head/${head}.png)`,
        height: 150,
        width: 150,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}></article>

      <article
      className='mid'
      style={{
        backgroundImage: `url(./middle/${mid}.png)`,
        height: 150,
        width: 150,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}></article>

      <article
      className='bottom'
      style={{
        backgroundImage: `url(./bottom/${bottom}.png)`,
        height: 150,
        width: 150,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}></article>

      <article
      className='shoes'
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
