import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../images/azulaTechLogo.png'

const Navbar = () => {

const navigate = useNavigate()

  return (
    <nav>
      <div className='logo-container'>
        <img src={logo} alt='logo' />
      </div>
      <div className='controls-container'>
        <div className='icon' onClick={() => navigate('/ticket')}>
          ＋
        </div>
        <div className='icon' onClick={() => navigate('/')}>
          ᐊ
        </div>
      </div>
    </nav>
  )
}

export default Navbar
