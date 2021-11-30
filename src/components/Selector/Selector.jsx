import React from 'react'

export default function Selector({
  head,
  onHeadChange,
  mid,
  onMidChange,
  bottom,
  onBottomChange,
  shoes,
  onShoeChange,
}) {

  const headIcons = ['bat', 'bearded dragon', 'frog', 'parrot', 'pigeon', 'snake', 'walrus'];
  const midIcons = ['dress', 'jacket', 'overalls', 'poncho', 'shirt', 'sweater'];
  const bottomIcons = ['jeans', 'pijamas', 'shorts'];
  const shoeIcons = ['boot', 'converse', 'sandals', 'tennies']

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <label>
        face-space
        <select 
        value={head} 
        onChange={(e) => onHeadChange(e.target.value)}>
            {headIcons.map((png) => (
            <option key={png}>{png}</option>
          ))}
          </select>
      </label>
      <label>
        tops
        <select 
        value={mid} 
        onChange={(e) => onMidChange(e.target.value)}>
            {midIcons.map((png) => (
            <option key={png}>{png}</option>
          ))}
          </select>
      </label>
      <label>
        bottoms
        <select 
        value={bottom} 
        onChange={(e) => onBottomChange(e.target.value)}>
            {bottomIcons.map((png) => (
            <option key={png}>{png}</option>
          ))}
          </select>
      </label>
      <label>
        shoes
        <select 
        value={bottom} 
        onChange={(e) => onShoeChange(e.target.value)}>
            {shoeIcons.map((png) => (
            <option key={png}>{png}</option>
          ))}
          </select>
      </label>
    </div>
  )
}
