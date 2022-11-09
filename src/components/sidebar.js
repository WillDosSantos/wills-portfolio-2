import * as React from 'react'
import { Link } from 'gatsby'

const Sidebar = () => {
    return (
      <div className="sidebar">
        <h1>Hi I'm Will</h1>
        <h1>
          <br />
          <span>I design worlds in the web3 space.</span>
        </h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
  
  export default Sidebar