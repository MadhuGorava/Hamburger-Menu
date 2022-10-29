// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="NavHeader">
        <div className="NavContent">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
              alt="website logo"
              className="WebsiteLogo"
            />
          </Link>
          <Popup
            modal
            trigger={
              <button
                type="button"
                className="HamburgerIconButton"
                testid="hamburgerIconButton"
              >
                <GiHamburgerMenu size="30" />
              </button>
            }
            className="popup-content"
          >
            {close => (
              <div className="ModalContainer">
                <button
                  type="button"
                  className="CloseButton"
                  testid="closeButton"
                  onClick={() => close()}
                >
                  <IoMdClose size="30" color="#616e7c" />
                </button>
                <ul className="NavLinksList">
                  <li className="NavLinkItem">
                    <Link to="/" className="NavLink" onClick={() => close()}>
                      <AiFillHome size="36" />
                      <p className="NavLinkContent">Home</p>
                    </Link>
                  </li>
                  <li className="NavLinkItem">
                    <Link
                      to="/about"
                      className="NavLink"
                      onClick={() => close()}
                    >
                      <BsInfoCircleFill size="32" />
                      <p className="NavLinkContent">About</p>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </Popup>
        </div>
      </nav>
    )
  }
}

export default Header
