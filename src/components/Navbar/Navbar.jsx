import React from 'react'
import { Outlet, Link } from "react-router-dom";
import styles from './styles.modules.css'

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">About Me</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Navbar
