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
            <img className={styles.hero_img} src="https://images.unsplash.com/photo-1512360893-6cfbebd8da30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2966&q=80" alt=""/>
          </div>
      </div>
    </Layout>
  </>
  )
}


