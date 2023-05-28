import React from 'react'
import Button from './Button.component'
import '../formInput.styles.scss'
import { Link, useNavigate } from 'react-router-dom'
import SignIn from './SignIn.component'


const StartPage = () => {
    return (
        <>

            {/* <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum praesentium placeat delectus. Culpa veritatis iste odit maiores quia libero totam sapiente nisi deleniti, praesentium reiciendis dignissimos illo quae ipsa blanditiis cupiditate nobis nemo molestiae nostrum. Molestias, nam, corrupti minima autem consequatur incidunt numquam quis dicta quibusdam magni accusamus quaerat modi in nisi velit rem quo explicabo dolore veritatis ipsa mollitia?</h3> */}
            <div className='start-button d-flex justify-content-center my-5'>
                {/* <button className='start-page-button' onClick={handleClick}>Sign Up</button> */}
                <SignIn/>
            </div>
        </>

    )
}

export default StartPage
