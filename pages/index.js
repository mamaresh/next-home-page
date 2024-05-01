import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Manju Amaresh</title>
        <link rel="icon" href="/m.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300&family=Noto+Sans+KR:wght@700&display=swap" rel="stylesheet" />
        <meta name="google-site-verification" content="_zzoqpGuQrPFQQdLUVffs9XrPk0_PSlenwNWNDA4gfU" />
      </Head>

      <main className={styles.main}>
        <p className={styles.title}>
          Hi, I'm Manju
        </p>
        <p className={styles.description}>
          I make things that live on your phones and in the interwebs.
        </p>

        <div className={styles.grid}>
          <a href="mailto:manjunathamaresh@gmail.com" target="_blank" className={styles.link}>Mail</a>
          <a href="https://www.linkedin.com/in/manjunathamaresh" target="_blank" className={styles.link}>LinkedIn</a>
          <a href="https://www.instagram.com/manju.amaresh/" target="_blank" className={styles.link}>Instagram</a>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>📍 San Francisco</span>
      </footer>
    </div>
  )
}
