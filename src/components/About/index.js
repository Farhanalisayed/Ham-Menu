import Header from '../Header'
import './index.css'

const About = () => (
  <div className="the-cont">
    <Header />
    <div className="home-cont-md">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
      />
      <h1>About</h1>
    </div>
    <div className="home-cont-sm">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
      />
      <h1>About</h1>
    </div>
  </div>
)

export default About
