import person1 from '../img/people/person1.jpg'
import person2 from '../img/people/person2.jpg'
import person3 from '../img/people/person3.jpg'
import person4 from '../img/people/person4.jpg'

import styles from './testimony.module.css'

export default function Testimony() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Depoimentos</h2>
      </div>
      <div className={styles.testimony}>
        <div className={styles.line}>
          <div className={styles.img}>
            <img src={person3} alt="Imagem de uma pessoa" />
          </div>
          <div className={styles.text}>
            <h2>Marcela S. - Aventureira em busca de adrenalina</h2>
            <h3>
              "TripAdventure me proporcionou experiências incríveis! Desde
              escalar montanhas até mergulhar em águas cristalinas. Encontrei
              aventuras que nunca imaginaria vivenciar. Recomendo a todos os
              amantes de adrenalina!"
            </h3>
          </div>
        </div>
        <div className={styles.lineReverse}>
          <div className={styles.text}>
            <h2>Pedro M. - Viajante em busca de novos destinos</h2>
            <h3>
              "Como um viajante ávido, TripAdventure mudou meu conceito de
              viagens. Consegui explorar destinos remotos, conhecer culturas
              fascinantes e fazer amizades inesquecíveis. Uma plataforma
              indispensável para quem busca aventura e descoberta!"
            </h3>
          </div>
          <div className={styles.img}>
            <img src={person1} alt="Imagem de uma pessoa" />
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.img}>
            <img src={person4} alt="Imagem de uma pessoa" />
          </div>
          <div className={styles.text}>
            <h2>Carolina R. - Apaixonada por ecoturismo</h2>
            <h3>
              TripAdventure é meu companheiro constante em todas as minhas
              viagens. Encontrei trilhas deslumbrantes, acampamentos em meio à
              natureza e passeios ecológicos que mudaram minha visão sobre
              turismo. É o lugar perfeito para quem quer explorar o mundo de
              forma sustentável."
            </h3>
          </div>
        </div>
        <div className={styles.lineReverse}>
          <div className={styles.text}>
            <h2>André L. - Fotógrafo em busca de paisagens únicas</h2>
            <h3>
              "Como fotógrafo, sempre estou em busca das paisagens mais
              deslumbrantes para capturar. TripAdventure não só me levou a esses
              lugares, mas também me conectou com outros apaixonados por
              fotografia. As oportunidades de registrar momentos únicos são
              infinitas. Um recurso valioso para qualquer fotógrafo viajante!"
            </h3>
          </div>
          <div className={styles.img}>
            <img src={person2} alt="Imagem de uma pessoa" />
          </div>
        </div>
      </div>
    </div>
  )
}
