import { Link } from 'react-router-dom'
import LinkButton from '../components/LinkButton'

import character from '../img/character.png'

import styles from './errorPage.module.css'

export default function ErrorPage() {
  return (
    <div className={styles.container}>
      <img src={character} alt="personagem" />
      <h1>Error 404!</h1>
      <p>
        <h2>Ops! Não encontramos esta página.</h2>
      </p>
      <Link to="/">
        <LinkButton type="text" text="Voltar" />
      </Link>
    </div>
  )
}
