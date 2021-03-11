import React from 'react';
import Logo from '../Logo';
import MenuIcon from '../MenuIcon';
import styles from './Header.module.css';


const Header = ({menuToggle, setMenuToggle}) => {
	return (
		<div className={styles.header_container}>
			<Logo />
			<MenuIcon menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
		</div>
	)
}

export default Header;
