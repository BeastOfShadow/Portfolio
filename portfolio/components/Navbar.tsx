'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light b-bord">
      <div className="container ps-4 pe-4">
        <Link className="nav-item nav-link ps-0 pt-1 pb-1 pe-4 link-b" href="/">
          シモネ
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item active">
              <Link className="nav-link link-d pt-1 pb-1" href="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-d pt-1 pb-1" href="/cv">
                CV
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-d pt-1 pb-1" href="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}