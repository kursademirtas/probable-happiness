import React, {useState} from 'react'
import styles from './Menu.module.css'
import Link from 'next/link'
import Logo from '../Logo'
import Icons from '../Icons';
const Menu = () => {


	
	return (
		<>
			<div className={styles.menu}>
				<nav className={styles.nav_container}>
					<ul>
						<Link to="/projects" href="/projects"><li className={styles.menu_item}>Projects</li></Link>
						<Link to="/about" href="/about"><li className={styles.menu_item}>About</li></Link>	
						<Link to="/services" href="/services"><li className={styles.menu_item}>Services</li></Link>	
						<Link to="/contact" href="/contact"><li className={styles.menu_item}>Contact Us</li></Link>	
					</ul>
				</nav>
				<Icons />
			</div>
		</>
	)
}

export default Menu;
