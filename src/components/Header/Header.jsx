import Link from 'next/link'
import React from 'react'
import StyleHeader from './header.module.css'
import { ButtonsHeader } from './ButtonsHeader'
import { BrandHeader } from './BrandHeader'

const navItem = [
  {
    label: '{HOME}',
    route: '/'
  },
  {
    label: '{PROJECTS}',
    route: '/projects'
  },
  {
    label: '{CONTACT}',
    route: '/contact'
  }
]

export function Header() {
  return (
    <header className={StyleHeader.header}>
      <BrandHeader />
      <nav className={StyleHeader.nav}>
        <ul className={StyleHeader.navigation}>
          {navItem.map(({ label, route }) => (
            <li key={route}>
              <Link className={StyleHeader.navItem} href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ButtonsHeader />
    </header>
  )
}