import React, {useContext} from 'react'
import add from '../img/add.png'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import {authcontext} from '../context/Authcontext'


export const Navbar = () => {
  const {currentUser} = useContext(authcontext);

  return (
    <div className='navbar'>
          <span className="logo"> Hillo Chat</span>
          <div className="user">
            <img src={currentUser.photoURL} alt='profialpic'/>
            <span>{currentUser.displayName}</span>
            <button onClick={()=>signOut(auth)}>logout</button>
          </div>
    </div>
  )
}
export default Navbar