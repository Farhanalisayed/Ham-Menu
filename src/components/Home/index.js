import Header from '../Header'
import './index.css'

const Home = () => (
    <div className="the-cont">
      <Header />
      <div className="home-cont-md">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
        />
        <h1>Home</h1>
      </div>
      <div className="home-cont-sm">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
          alt="home"
        />
        <h1>Home</h1>
      </div>
    </div>
  )
export default Home
