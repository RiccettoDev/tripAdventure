import styles from './cardDestiny.module.css'

export default function CardDestiny({ text, img, alt }) {
  return (
    <div className={styles.containerDestiny}>
      <img src={img} alt={alt} />
      <button type="text">
        <h2>{text}</h2>
      </button>
    </div>
  )
}
