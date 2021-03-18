import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout'
import styles from './projects.module.css'
import cn from 'classnames'




const Projects = () => {

	const [current, setCurrent] = useState(0)


	return (
		<Layout>
			<div className={styles.projects_container}>
				<div className={styles.text_container}>
					<span className={styles.text}>from and co</span>
				</div>
				
				<div className={styles.projects}>
					<div><span className={styles.list_number} >01</span><h2 className={cn(styles.title, current === 0 && styles.current)}  onClick={() => setCurrent(0)}> Margaritas</h2></div>
					<div><span className={styles.list_number} >02</span><h2 className={cn(styles.title, current === 1 && styles.current)} onClick={() => setCurrent(1)}>Toasts</h2></div>
					<div><span className={styles.list_number} >03</span><h2 className={cn(styles.title, current === 2 && styles.current)} onClick={() => setCurrent(2)}>Avacado Club</h2></div>
					<div><span className={styles.list_number} >04</span><h2 className={cn(styles.title, current === 3 && styles.current)} onClick={() => setCurrent(3)}>Pancakes</h2></div>
					<div><span className={styles.list_number} >05</span><h2 className={cn(styles.title, current === 4 && styles.current)} onClick={() => setCurrent(4)}>Figs Fever</h2></div>
					
				</div>
				<div className={styles.images}>
					<img className={cn(styles.project_image, current === 0 && styles.current_image)} src="https://images.unsplash.com/photo-1565612711481-69a7aa45147e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80" alt=""/>
					<img className={cn(styles.project_image, current === 1 && styles.current_image)} src="https://images.unsplash.com/photo-1519068596688-d7eb3bcf2dc8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" alt=""/>
					<img className={cn(styles.project_image, current === 2 && styles.current_image)} src="https://res.cloudinary.com/dlt51mt3f/image/upload/v1615466550/brutalism/menu-image_dnlxqd.png" alt=""/>
					<img className={cn(styles.project_image, current === 3 && styles.current_image)} src="https://images.unsplash.com/photo-1609667816598-825622bc3def?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80" alt=""/>
					<img className={cn(styles.project_image, current === 4 && styles.current_image)} src="https://images.unsplash.com/photo-1480350584567-289f054d58f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt=""/>
				</div>
			</div>
		

		</Layout>
	)
}

export default Projects;
