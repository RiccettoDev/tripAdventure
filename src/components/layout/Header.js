import logo from '../../img/logo.png'

import styles from './header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" />
      <ul>
        <li>
          <a>Inicio</a>
        </li>
        <li>
          <a>Destinos</a>
        </li>
        <li>
          <a>Avaliações</a>
        </li>
        <li>
          <a>Galeria</a>
        </li>
      </ul>
    </div>
  )
}
