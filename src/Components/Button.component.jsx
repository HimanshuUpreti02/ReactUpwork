import React from 'react'
import '../formInput.styles.scss'

const BUTTON_TYPE_CLASSES = {
    google : 'google-sign-in',
    inverted : 'inverted'
}

const Button = ({children , buttontype ,...otherProps}) => {
  return (
        <button className={` btn btn-primary h-25 w-25 button-container ${BUTTON_TYPE_CLASSES[buttontype]}`}>
            {children}
        </button>
  )
}

export default Button
