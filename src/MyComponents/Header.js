import React from 'react'
import PropTypes from 'prop-types'
import {link} from "react-router-dom"

import { Link } from 'react-router-dom'
// index.js is parent component and we are passing javascript object "props" from it to our child component Header.js
export default function Header(props) {
    return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li classNameName="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
    </ul>
    {props.searchBar? <form className="d-flex" >
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Find</button>
    </form> : "No search bar"}
  </div>
</nav>
    )
}

Header.defaultProps = {
  title: "Your title here",
  searchBar: true
}


// For strict datatype
Header.propTypes= {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}