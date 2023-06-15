import Link from 'next/link'
import React from 'react'
import StyleHeader from './header.module.css'
import { ButtonsHeader } from './ButtonsHeader'
import { BrandHeader } from './BrandHeader'

const navItem = [
  {
    label: '{INICIO}',
    route: '/'
  },
  {
    label: '{PROYECTOS}',
    route: '/proyectos'
  },
  {
    label: '{CONTACTO}',
    route: '/contacto'
  }
]

export function Header() {
  return (
    <header className={StyleHeader.header}>
      <BrandHeader />
      <nav className={StyleHeader.header}>
        <ul className={StyleHeader.navigation}>
          {navItem.map(({ label, route }) => (
            <li className={StyleHeader.navItem} key={route}>
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

