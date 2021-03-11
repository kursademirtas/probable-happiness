import React from 'react'
import styles from './MenuIcon.module.css'

const MenuIcon = ({menuToggle, setMenuToggle}) => {
	return (
		<div onClick={() => setMenuToggle(!menuToggle)}>
	{	menuToggle ? <span className={styles.close_icon}>X</span>:
		<span className={styles.menu_icon}>Menu</span>}
		</div>
	)
}

export default MenuIcon
