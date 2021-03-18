import Logo from '../Logo'
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<div className={styles.footer}>
			<Logo />
			<ul className={styles.footer_items}>
				<li>projects</li>
				<li>about</li>
				<li>contact</li>
				<li>facebook</li>
				<li>twitter</li>
				<li>instagram</li>
			</ul>
		</div>
	)
}

export default Footer;
