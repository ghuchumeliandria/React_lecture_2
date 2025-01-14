import './App.css'
import logo from './assets/images/cube.png'
import icon from './assets/images/icon.png'
import profile from './assets/images/profile.png'
import clock from './assets/images/clock.png'
function App() {
  const element = <h1 className='heading'>Equilibrium #3429</h1>
  const paragraph = <p className='card_d'>Our Equilibrium collection promotes balance and calm.</p>
  return (
    <>
    <div className='card'>
      <div className="card_image">
        <img src={logo} alt="" />
      </div>
      {element}
      {paragraph}
      <div className='version'>
        <p className="version_p"> <img src={icon} alt="" /> 0.041 ETH</p>
        <p className="days_p"> <img src={clock} alt="" /> 3 days left</p>
      </div>
      <div className="line"></div>
      <div className="footer">
        <img src={profile} alt="" />
        <p><span>Creation of</span>Jules Wyvern</p>
      </div>
    </div>
    </>
  )
}

export default App
