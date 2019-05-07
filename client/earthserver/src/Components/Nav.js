import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Nav extends Component {
  render() {
    return (
        <div className = 'topnav'>
          <h3 className = 'item float-left'>Logo</h3>
          <Link className = 'item float-left' to="/">
              Home
          </Link>
          <Link className = 'item float-left' to="/about">
              about
          </Link>
          <Link className = 'item float-right' to="/about">
              Sign In!
          </Link>
        </div>
     
    )
  }
}

export default Nav
