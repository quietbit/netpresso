import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query NavbarQuery {
      siteLogo: file(absolutePath: { regex: "/site-logo.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const siteLogo = data?.siteLogo?.childImageSharp?.fixed

  const [navState, setNavState] = useState(false)

  function navToggle() {
    setNavState(!navState)
  }

  return (
    <nav
      className="navbar navbar-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="">
          {siteLogo && (
            <Image fixed={siteLogo} alt={`site logo`} className="site-logo" />
          )}
          <span className="title is-3">n e t p r e s s o</span>
        </a>
        {console.log(navState)}
        <a
          role="button"
          //className="navbar-burger"
          className={`navbar-burger ${navState ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={navToggle}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${navState ? "is-active" : ""}`}
      >
        {/* <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
        </div> */}
        <div className="navbar-end">
          <Link className="navbar-item" to="/">
            Sklep
          </Link>
          <Link className="navbar-item" to="/">
            Dostawa
          </Link>
          <Link className="navbar-item" to="/">
            Rabaty
          </Link>
          <Link className="navbar-item" to="/">
            O nas
          </Link>
          <Link className="navbar-item mr-5" to="/">
            <span className="icon">
              <FontAwesomeIcon className="mr-3" icon={faShoppingCart} />
              <span title="Badge right" className="badge is-right">
                <span className="has-text-black has-text-weight-bold">0</span>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
