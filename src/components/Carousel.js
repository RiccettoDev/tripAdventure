import { useState, useEffect, useRef } from 'react'

import { motion } from 'framer-motion'

import styles from './carousel.module.css'

import trindade from '../img/destiny/trindade.jpg'
import brotas from '../img/destiny/brotas.jpg'
import floripa from '../img/destiny/floripa.jpg'
import manaus from '../img/destiny/manaus.jpg'
import salvador from '../img/destiny/salvador.jpg'
import fortaleza from '../img/destiny/fortaleza.jpg'
import natal from '../img/destiny/natal.jpg'
import maragogi from '../img/destiny/maragogi.jpg'
import bonito from '../img/destiny/bonito.jpg'

const images = [
  { name: 'Trindade - RJ', img: trindade },
  { name: 'Brotas - SP', img: brotas },
  { name: 'Florianópolis - SC', img: floripa },
  { name: 'Manaus - MA', img: manaus },
  { name: 'Salvador - BA', img: salvador },
  { name: 'Fortaleza - CE', img: fortaleza },
  { name: 'Natal - RN', img: natal },
  { name: 'Maragogi - AL', img: maragogi },
  { name: 'Bonito - MT', img: bonito }
]

export default function Carousel() {
  const carousel = useRef()
  const [widthCarousel, setWidthCarousel] = useState(0)

  useEffect(() => {
    setWidthCarousel(
      carousel.current?.scrollWidth - carousel.current?.offsetWidth
    )
  }, [])

  return (
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
              <img src={image.img} alt="imagem" />
              <button type="text">
                <h3>{image.name}</h3>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
