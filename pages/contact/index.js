import React from 'react'
import Map from '../../components/Map';
import Icons from '../../components/Icons'
import styles from './contact.module.css';

const Contact = () => {

	const containerStyle = {
		width: '50vw',
		height: '100vh'
	  };

	return (
	
		<div className={styles.contact_container}>
			<img src="https://res.cloudinary.com/dlt51mt3f/image/upload/v1615466548/brutalism/contact_cisvdo.png" alt=""/>
			<Map mapSize={containerStyle} />
			<aside className={styles.contact}>
				<h2>Contact Us</h2>
				<div className={styles.contact_body}>
					<span>Address</span>
					<p>767 Fifth Ave.New York, NY 10153</p>
					<span>Email</span>
					<p>kursademirtas@gmail.com</p>
					<span>Phone</span>
					<p>+123 456 789</p>
					<span>Follow us</span>

				</div>
			</aside>
		</div>

	)
}

export default Contact
