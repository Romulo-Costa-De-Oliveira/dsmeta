import React from 'react'
import logo from '../../assets/logo.svg'
import './styles.css'

const Header = () => {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1><strong>DSMeta</strong></h1>
        <p>
          Desenvolvido por
          <a href="https://github.com/Romulo-Costa-De-Oliveira">@romulocosta</a>
        </p>
      </div>
    </header>
  )
}

export default Header