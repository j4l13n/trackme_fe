import Head from 'next/head';
import styles from '../styles/Home.module.css';
import '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/images/location-icon-png-4234.png" className={styles.homLogo} alt="Track Me logo" />
        <h1 className={styles.title}>
        <span className={styles.welcome}>Welcome to{' '}</span>
        <span className={styles.animate + ' ' + styles.six}>
          <a href="/login">
              <span>T</span><span>r</span><span>a</span><span>c</span> 
              <span>k</span>&nbsp;<span>M</span><span>e</span>&nbsp;<span>A</span>
              <span>p</span><span>p</span>
          </a>
        </span>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          Karangwa Hirwa Julien
        </a>
      </footer>
    </div>
  )
}
