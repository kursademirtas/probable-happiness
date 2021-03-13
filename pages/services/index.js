import React from 'react';
import Layout from '../../components/Layout/Layout';
import styles from './services.module.css';
import cn from "classnames";


const Services = () => {
	return (
		<Layout>
			<div className={styles.services}>
				<div className={cn(styles.service, styles.service1)}>
					<span>01</span>
					<div className="">
					<h2>User Research</h2>
					<p>Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note!</p>
					</div>
				</div>
				<div className={cn(styles.service, styles.service2)}>
					<span>02</span>
					<div>
					<h2>Wireframe</h2>
					<p>Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note!</p>
					</div>
				</div>
				<div className={cn(styles.service, styles.service3)}>
					<span>03</span>
					<div>
						<h2>Development</h2>
						<p>Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note!</p>
					</div>
				</div>


			</div>
		</Layout>
	)
}

export default Services;
