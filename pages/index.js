import styles from '../styles/Home.module.css'

import Layout from '../components/Layout/Layout'

export default function Home() {
  return (
    <>
    <Layout>
        <div className={styles.container}>
          <div className={styles.hero_content}>
            <h1 className={styles.title_filled}>Brutalism</h1>
            <h2 className={styles.title}>from and co</h2>
            <img className={styles.hero_img} src="https://res.cloudinary.com/dlt51mt3f/image/upload/v1615466550/brutalism/hero-image_rop1o2.png" alt=""/>
          </div>
      </div>
    </Layout>
  </>
  )
}


