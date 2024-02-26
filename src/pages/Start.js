import logo from '../img/logo.png'

import styles from './start.module.css'

export default function Start() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.containerInfo}>
          <h2>
            Bem-vindo ao <span>TripAdventure</span>, sua plataforma completa
            para explorar o mundo e viver aventuras incríveis. Descubra destinos
            deslumbrantes e atividades emocionantes com facilidade e segurança.
          </h2>
          <h2>
            Junte-se à nossa comunidade de viajantes apaixonados, compartilhe
            suas experiências e encontre inspirações. Encontre sua próxima
            aventura aqui no <span>TripAdventure</span>!
          </h2>
        </div>
        <div className={styles.containerLogo}>
          <img src={logo} alt="Imagem TripAdventure" />
        </div>
      </div>
    </div>
  )
}
