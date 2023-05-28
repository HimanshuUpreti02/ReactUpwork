import React  , {Fragment}from 'react';
import {Outlet , Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../assets/icon.svg'
import './navbar.styles.scss'
import SignOut from '../Components/SignOut.component';

const Navbar = ({home}) => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to="/">
          <Logo  className="logo"/>
        </Link>
        {!home && <div className="nav-links-container">
          <Link className='nav-link' to="/auth">
            Log in / Sign up
          </Link>
        </div>
        }
        {home && <div className="nav-links-container">
          <Link className='nav-link' to="/">
            SignOut
          </Link>
        </div>}
      </div>
      <Outlet/>
    </Fragment>

  )
}

export default Navbar
