import React from "react"
import "./style.css"

class Header extends React.Component {


  render() {
    return (
    <header className="page-header">
    <div className="logo">
      <span className="page-title">Product Page</span>
    </div>
    <div className="navigation">
      <nav>
        <ul>
          <li className="Header-link"><a href="/">Home</a></li>
          <li className="Header-link"><a href="/form">Form</a></li>
        </ul>
      </nav>
    </div>
  </header>
    )
  }

}

export default Header
