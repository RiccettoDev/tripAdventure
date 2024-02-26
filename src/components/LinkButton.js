import styles from './linkButton.module.css'

export default function LinkButton({ type, text }) {
  return (
    <div className={styles.btn}>
      <button type={type}>{text}</button>
    </div>
  )
}
