import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import Header from '../Header'
import './index.css'

class Home extends Component {
  state = {isClicked: false}
  onClicked = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  renderHome = () => {
    const homeUrl =
      screen.width < 768
        ? 'https://assets.ccbp.in/frontend/react-js/home-sm-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-lg-img.png'
    return (
      <div className="home-cont">
        <img className="image" src={homeUrl} alt="home" />
        <h1>Home</h1>
      </div>
    )
  }
  renderOptions = () => (
    <div className="options">
      <Link to="/">
        <AiFillHome className="route-icon" />
      </Link>

      <Link to="/about">
        <BsInfoCircleFill className="route-icon" />
      </Link>
    </div>
  )

  render() {
    const {isClicked} = this.props

    return (
      <div className="the-cont">
        <Header onClicked={this.onClicked} />
        {isClicked ? this.renderOptions() : this.renderHome()}
      </div>
    )
  }
}
export default Home
