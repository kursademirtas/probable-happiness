import React from 'react'
import Icons from '../../components/Icons';
import Layout from '../../components/Layout/Layout';
import Title from '../../components/Title/Title';
import styles from './about.module.css'

const About = () => {

	const cn = require('classnames');
	


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
					<p className={styles.text}>Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! No… but I'd like to be asked! Oh, you're gonna be in a coma, all right.</p>
					<p className={styles.text}>Army had half a day. Bad news. Andy Griffith turned us down. He diadn't like his trailer. That's why you always leave a note! Army had half a day. Bad news. Andy Griffith turned us down. </p>
				</div>
			</section>

			<section className={styles.team}>
				<div className={styles.title_container}>
					<h2 className={styles.title}>Our Team</h2>
					<p className={styles.text}>Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his nice trailer. Did you enjoy your meal, Mom? You drank it fast enough. Get me a vodka rocks. And a piece of toast. Marry me.”</p>
				</div>
			
					<div className={styles.person_card}>
						<div className={styles.card_top}>
							<span>Founder</span>
							<img src="https://res.cloudinary.com/dlt51mt3f/image/upload/v1615466551/brutalism/team-1_nbghxx.png" alt="gene avatar"/>
							<div><Icons vertical/></div>
						</div>
						<div className={styles.card_body}>
							<h3 className={styles.subtitle}>Gene Parmesan</h3>
							<p className={styles.text}>Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his nice trailer. Did you enjoy your meal, Mom? You drank it fast enough. Get me a vodka rocks. And a piece of toast. Marry me.”</p>
						</div>
					</div>
					<div className={cn(styles.person_card, styles.card_left)}>
						<div className={styles.card_top}>
							<span>CHIEF OFFICER</span>
							<img src="https://res.cloudinary.com/dlt51mt3f/image/upload/v1615466552/brutalism/team2_ku2yvd.png" alt="Bob Boblaw"/>
							<div><Icons vertical/></div>
						</div>
						<div className={styles.card_body}>
							<h3 className={styles.subtitle}>Bob Boblaw</h3>
							<p className={styles.text}>Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his nice trailer. Did you enjoy your meal, Mom? You drank it fast enough. Get me a vodka rocks. And a piece of toast. Marry me.”</p>
						</div>
					</div>
					<div className={styles.person_card}>
						<div className={styles.card_top}>
							<span>UI Designer</span>
							<img src="https://res.cloudinary.com/dlt51mt3f/image/upload/v1615466552/brutalism/team3_sx1tog.png" alt="Lucille Bluth"/>
							<div><Icons vertical/></div>
						</div>
						<div className={styles.card_body}>
							<h3 className={styles.subtitle}>Lucille Bluth</h3>
							<p className={styles.text}>Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his nice trailer. Did you enjoy your meal, Mom? You drank it fast enough. Get me a vodka rocks. And a piece of toast. Marry me.”</p>
						</div>
					</div>
					<div className={cn(styles.person_card, styles.card_left)}>
						<div className={styles.card_top}>
							<span>Web Developer</span>
							<img src="https://res.cloudinary.com/dlt51mt3f/image/upload/v1615466552/brutalism/team4_kbiiij.png" alt="Maeby Funke"/>
							<div><Icons vertical/></div>
						</div>
						<div className={styles.card_body}>
							<h3 className={styles.subtitle}>Maeby Funke</h3>
							<p className={styles.text}>Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his nice trailer. Did you enjoy your meal, Mom? You drank it fast enough. Get me a vodka rocks. And a piece of toast. Marry me.”</p>
						</div>
					</div>
			</section>
		</Layout>
	)
}

export default About;
