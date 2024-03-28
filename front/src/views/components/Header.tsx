import React from 'react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <nav aria-label="Main">
      <Link to="/">
        <img alt="" src="/favicon.svg" height={16} /> <span className="courgette">Hanafuda</span>
      </Link>
      <Link to="koi-koi">Koi-Koi</Link>
    </nav>
  )
}
