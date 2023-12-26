import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import Header from '../Header'
import './index.css'

class About extends Component {
  state = {isClicked: false}
  onClicked = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  renderAbout = () => {
    const aboutUrl =
      screen.width < 768
        ? 'https://assets.ccbp.in/frontend/react-js/about-sm-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-lg-img.png'
    return (
      <div className="home-cont">
        <img className="image" src={aboutUrl} alt="about" />
        <h1>About</h1>
      </div>
    )
  }
  renderOptions = () => (
    <div>
      <Link to="/">
        <AiFillHome className="route-icon" />
      </Link>

      <Link to="/about">
        <BsInfoCircleFill className="route-icon" />
      </Link>
    </div>
  )

  render() {
    return (
      <div className="the-cont">
        <Header />
      </div>
    )
  }
}
export default About
