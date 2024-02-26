import { useState, useEffect, useRef } from 'react'

import { motion } from 'framer-motion'

import CardDestiny from '../components/CardDestiny'

import trindade from '../img/destiny/trindade.jpg'
import brotas from '../img/destiny/brotas.jpg'
import floripa from '../img/destiny/floripa.jpg'
import manaus from '../img/destiny/manaus.jpg'
import salvador from '../img/destiny/salvador.jpg'
import fortaleza from '../img/destiny/fortaleza.jpg'
import natal from '../img/destiny/natal.jpg'
import maragogi from '../img/destiny/maragogi.jpg'
import bonito from '../img/destiny/bonito.jpg'

import styles from './destiny.module.css'

const images = [
  trindade,
  brotas,
  floripa,
  manaus,
  salvador,
  fortaleza,
  natal,
  maragogi,
  bonito
]

export default function Destiny() {
  const carousel = useRef()
  const [widthCarousel, setWidthCarousel] = useState(0)

  useEffect(() => {
    setWidthCarousel(
      carousel.current?.scrollWidth - carousel.current?.offsetWidth
    )
  }, [])

  return (
    <div className={styles.destiny}>
      <div className={styles.title}>
        <h2>Destinos</h2>
      </div>
      <div className={styles.container}>
        <motion.div
          ref={carousel}
          className={styles.carousel}
          whileTap={{ cursor: 'grabbing' }}
        >
          <motion.div
            className={styles.inner}
            drag={'x'}
            dragConstraints={{ right: 0, left: -widthCarousel }}
          >
            {images.map(image => (
              <motion.div key={image} className={styles.item}>
                <div className={styles.card}>
                  <img src={image} alt="imagem" />
                  <button type="text">
                    <h2>image</h2>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className={styles.overlay} />
    </div>
  )
}
