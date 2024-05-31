import styles from '../../styles/Home.module.scss'
import GuestsPage from '../../components/GuestsPage'
import Head from 'next/head'

export default function rooms() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Hotel Management System</title>
          <meta name="description" content="By Ankit Kumar" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <GuestsPage />
      </div>
    );
}
