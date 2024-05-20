import React, { useContext } from 'react'
import UserContext from '../utils/UserContext'
const Mart = () => {

  const {name}= useContext(UserContext)
  return (
    <div>
      <h1>This is mart page</h1>
      <p>Username:{name}</p>
    </div>
  )
}

export default Mart
