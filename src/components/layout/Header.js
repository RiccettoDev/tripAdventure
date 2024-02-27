import { useState } from 'react'

import { Link } from 'react-scroll'

import logo from '../../img/logo.png'

import styles from './header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [overlay, setOverlay] = useState(false)

  function openMenuBurguer() {
    setMenuOpen(true)
    setOverlay(true)
  }

  function closeMenuBurguer() {
    setMenuOpen(false)
    setOverlay(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <a href="/">
          <img src={logo} alt="Logo Riccetto Dev" className={styles.logo} />
        </a>
      </div>
      <div className={styles.navibar}>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="Start"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Destiny"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Destinos
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Testimony"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Avaliações
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contato
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.burguerMenu}>
        <button onClick={openMenuBurguer}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </button>
      </div>
      <div className={menuOpen ? styles.menuMobileActive : styles.menuMobile}>
        <butto onClick={closeMenuBurguer}>
          <div className={styles.btnFechar}>X</div>
        </butto>
        <div>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="Start"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={closeMenuBurguer}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="Destiny"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={closeMenuBurguer}
              >
                Destinos
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="Testimony"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={closeMenuBurguer}
              >
                Avaliações
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={closeMenuBurguer}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={overlay ? styles.overlayMenuActive : styles.overlayMenu}
      ></div>
    </div>
  )
}
