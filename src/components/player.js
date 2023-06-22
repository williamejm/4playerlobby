import React from 'react'

function player({user, changeColor}) {
  const onChange = (e) => {
    changeColor(e.target.value, user.id)
  }
  return (
    <div className='player' style={{backgroundColor: `${user.color}`}}>
        <form>
          <h2 style={{fontSize: "40px"}}>{user.name}</h2>
          <div className='color-menu'>
            <label style={{fontSize: "25px"}}>Choose color: </label>
            <select className='color-select' onChange={onChange}>
              <option>Select</option>
              <option value={'red'}>Red</option>
              <option value={'blue'}>Blue</option>
              <option value={'green'}>Green</option>
              <option value={'yellow'}>Yellow</option>
              <option value={'orange'}>Orange</option>
              <option value={'purple'}>Purple</option>
            </select>
          </div>
        </form>
    </div>
  )
}

export default player