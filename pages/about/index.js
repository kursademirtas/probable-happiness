import React from 'react'
import Layout from '../../components/Layout/Layout';
import Title from '../../components/Title/Title';
import styles from './about.module.css'

const About = () => {

	
	return (
		<Layout>
			
			<section className={styles.about_container}>
				<div>
					<h2 className={styles.title}>About</h2>
					<img className={styles.image} src="https://res.cloudinary.com/dlt51mt3f/image/upload/v1615466550/brutalism/hero-image_rop1o2.png" alt="orange photo"/>
				</div>
				<div className={styles.about_body}>
					<h3 className={styles.subtitle}>Andy Griffith turned us down.</h3>
					<p className={styles.text}>Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his nice trailer. That's why you always leave a note!</p>
				</div>
			</section>
			<section className={styles.vision}>
				<div className={styles.vision_body}>
					<h3 className={styles.subtitle}>Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer.</h3>
					<p className={styles.text}>Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! No… but I'd like to be asked! Oh, you're gonna be in a coma, all right.</p>
				</div>
				<h2 className={styles.title}>Our Vision</h2>
			</section>
			<section className={styles.ourValues}>
				<img src="https://images.unsplash.com/photo-1615247644823-a5f0d3b5f795?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80" alt="pyramid photo" className={styles.image}/>	
				<h3 className={styles.title}>Our Values</h3>
				<h3 className={styles.subtitle}>Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer.</h3>
				<div className={styles.ourValues_body}>
					<p className="styles text">Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! No… but I'd like to be asked! Oh, you're gonna be in a coma, all right.</p>
					<p className="styles text">Army had half a day. Bad news. Andy Griffith turned us down. He diadn't like his trailer. That's why you always leave a note! Army had half a day. Bad news. Andy Griffith turned us down. </p>
				</div>
			</section>
		</Layout>
	)
}

export default About;
