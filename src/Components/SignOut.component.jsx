import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase/firebase.utils'
import { useNavigate } from 'react-router-dom'


const SignOut = () => {
    const Navigate = useNavigate()
    const handleClick = ()=>{
        signOut(auth).then(()=>{
            Navigate("/auth")
        }).catch(err => {alert(err.message);});
    }
  return (
    <div>
      <button onClick={handleClick}>SignOut</button>
    </div>
  )
}

export default SignOut
