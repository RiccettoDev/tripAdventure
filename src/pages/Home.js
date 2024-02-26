import Start from './Start'
import Destiny from './Destiny'

import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <Start />
      </div>
      <div className={styles.subcontainer2}>
        <Destiny />
      </div>
    </div>
  )
}
