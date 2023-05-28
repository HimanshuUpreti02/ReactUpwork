import React from 'react'
import SignIn from '../Components/SignIn.component'
import SignUp from '../Components/SignUp.components'
import '../formInput.styles.scss'

const Authentication= () => {
  return (
    <div className='auth-container'>
      <SignIn/>
      <SignUp/>
    </div>
  )
}

export default Authentication
