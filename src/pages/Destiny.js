import Carousel from '../components/Carousel'

import styles from './destiny.module.css'

export default function Destiny() {
  return (
    <div className={styles.destiny}>
      <div className={styles.title}>
        <h2>Destinos</h2>
      </div>
      <div className={styles.container}>
        <Carousel />
      </div>
      <div className={styles.container2}>
        <Carousel />
      </div>
      <div className={styles.overlay} />
    </div>
  )
}
