import Start from './Start'
import Destiny from './Destiny'
import Testimony from './Testimony'
import Contact from './Contact'

import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div id="Start" className={styles.subcontainer}>
        <Start />
      </div>
      <div id="Testimony">
        <Testimony />
      </div>
      <div id="contact" className={styles.contact}>
        <Contact />
      </div>
    </div>
  )
}
