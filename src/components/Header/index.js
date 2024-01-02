import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => {
  const overlayStyles = {
  backgroundColor: '#ffff',
  color:'black',
  width:'100%'
 }

  return(
  <div className="the-cont">
    <div>
      <Link to="/">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
    </div>
    <div>
      <Popup
        modal
        trigger={
          <button data-testid="hamburgerIconButton">
            <GiHamburgerMenu className="ham-icon" />
          </button>
        }
        overlayStyle={overlayStyles}
        className="popup-content"
      >
        {close => (
          <>
            <button
              data-testid="closeButton"
              className="closeBut"
              onClick={() => {
                close()
              }}
            >
              <IoMdClose className="ham-icon" />
            </button>
            <ul>
              <li>
                <Link to="/">
                  <AiFillHome className="route-icon" />
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <BsInfoCircleFill className="route-icon" />
                  <p>About</p>
                </Link>
              </li>
            </ul>
          </>
        )}
      </Popup>
    </div>
  </div>
)
}
export default Header
