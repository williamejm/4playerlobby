import React, { useContext } from 'react'
import Player from './player'

const Players = ({users, changeColor}) => {
  return (
    <>
      {users.map((user) => (
        <Player user={user} changeColor={changeColor} />
      ))}
    </>
  )
}

export default Players