import {Component} from 'react'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

class Header extends Component {
  onClickedHam = () => {
    const {onClicked} = this.props
    onClicked()
  }

  render() {
    const overlayStyles = {
      backgroundColor: '#ffff',color:'black'
    }
    return (
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
          trigger={
            <GiHamburgerMenu
              className="ham-icon"
              data-testid="hamburgerIconButton"
              onClick={this.onClickedHam}
            />}
          overlayStyle={overlayStyles}
          position="none"
        >
          {close => (
            <>
              <IoMdClose
                className="ham-icon"
                onClick={() => close()}
                data-testid="closeButton"
              />
            </>
          )}
        </Popup>
        </div>
      </div>
    )
  }
}
export default Header
