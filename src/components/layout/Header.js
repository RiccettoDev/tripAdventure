import { Link } from 'react-scroll'

import logo from '../../img/logo.png'

import styles from './header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" />
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
            offset={-50}
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
            offset={-50}
            duration={500}
          >
            Contato
          </Link>
        </li>
      </ul>
    </div>
  )
}
