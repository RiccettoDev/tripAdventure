import styles from './contact.module.css'

export default function Contact() {
  return (
    <section id="Contact" className={styles.containerContact}>
      <div className={styles.title}>
        <h2>Fale Conosco</h2>
      </div>
      <form action="" className={styles.form}>
        <input
          className={styles.imput}
          type="text"
          name=""
          id=""
          placeholder="Seu nome completo:"
          required
        />
        <input
          className={styles.imput}
          type="text"
          name=""
          id=""
          placeholder="Seu e-mail:"
          required
        />
        <input
          className={styles.imput}
          type="text"
          name=""
          id=""
          placeholder="Seu celular:"
          required
        />
        <textarea
          className={styles.imput}
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Sua mensagem"
          required
        ></textarea>
        <div className={styles.btnEnviar}>
          <input className={styles.imputBtn} type="submit" value="ENVIAR" />
        </div>
      </form>
    </section>
  )
}
