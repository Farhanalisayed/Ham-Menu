// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import Header from '../Header'
import './index.css'

class NotFound extends Component {
  state = {isClicked: false}

  onClicked = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  renderNot = () => (
    <div className="home-cont">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
      />
      <h1>Lost Your Way?</h1>
      <p>
        Sorry, we can't find that page. You'll find lots to explore on the home
        page.
      </p>
    </div>
  )

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
    const {isClicked} = this.state
    return (
      <div className="the-cont">
        <Header onClicked={this.onClicked} />
        {isClicked ? this.renderOptions() : this.renderNot()}
      </div>
    )
  }
}
export default NotFound
