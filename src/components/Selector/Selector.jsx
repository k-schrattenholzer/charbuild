import React from 'react';
import './Selector.css'

export default function Selector({
  head,
  onHeadChange,
  mid,
  onMidChange,
  bottom,
  onBottomChange,
  shoes,
  onShoeChange,
  newSaying,
  addSaying,
  handleClick,
}) {

  const headIcons = ['bat', 'bearded dragon', 'frog', 'parrot', 'pigeon', 'snake', 'walrus'];
  const midIcons = ['dress', 'jacket', 'poncho', 'shirt', 'sweater'];
  const bottomIcons = ['jeans', 'pijamas', 'shorts'];
  const shoeIcons = ['boot', 'converse', 'sandals', 'tennies']

  return (
    <div 
    className='Selector-Container'
    >
      <article
      className='Options-Container'>
        <label
        className='Option'>
          face-space
          <select 
          value={head} 
          onChange={(e) => onHeadChange(e.target.value)}>
              {headIcons.map((png) => (
              <option key={png}>{png}</option>
            ))}
            </select>
        </label>
        <label
        className='Option'>
          tops
          <select 
          value={mid} 
          onChange={(e) => onMidChange(e.target.value)}>
              {midIcons.map((png) => (
              <option key={png}>{png}</option>
            ))}
            </select>
        </label>
        <label
        className='Option'>
          bottoms
          <select 
          value={bottom} 
          onChange={(e) => onBottomChange(e.target.value)}>
              {bottomIcons.map((png) => (
              <option key={png}>{png}</option>
            ))}
            </select>
        </label>
        <label
        className='Option'>
          shoes
          <select 
          value={shoes} 
          onChange={(e) => onShoeChange(e.target.value)}>
              {shoeIcons.map((png) => (
              <option key={png}>{png}</option>
            ))}
            </select>
        </label>
        <label
        className='Option'>
          whats on yr brain-space?
          <input
            type='text'
            value={newSaying}
            onChange={(e) => addSaying(e.target.value)}
            // onFocus={(e) => {
            //   this.value = '';
            // }}
          />
          <button 
            type='button'
            onClick={handleClick}>
                    put it in the bucket
          </button>
        </label>  
      </article>
    </div>
  )
}
