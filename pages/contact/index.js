import React from 'react'
import Map from '../../components/Map';
import Icons from '../../components/Icons'
import styles from './contact.module.css';
import Layout from '../../components/Layout/Layout'
const Contact = () => {

	const containerStyle = {
		width: '50vw',
		height: '90vh'
	  };

	return (
	<Layout>
		<div className={styles.contact_container}>
			
			<div className={styles.map}><Map mapSize={containerStyle} /></div>
			<aside className={styles.contact}>
				<h2>Contact  <br/> Us</h2>
				<div className={styles.contact_body}>
					<span>Address</span>
					<p>767 Fifth Ave.New York, NY 10153</p>
					<span>Email</span>
					<p>kursademirtas@gmail.com</p>
					<span>Phone</span>
					<p>+123 456 789</p>
					<span>Follow us</span>
					<div ><Icons /></div>
				</div>
			</aside>
		</div>
	</Layout>
	

	)
}

export default Contact
