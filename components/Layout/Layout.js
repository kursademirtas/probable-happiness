import {useState} from 'react'
import Footer from '../Footer';

import Header from '../Header';
import Menu from '../Menu'
const Layout = ({ children }) => {

	const [menuToggle, setMenuToggle] = useState(false);
	
	return (
		<div className="layout">
			<Header menuToggle ={menuToggle} setMenuToggle={setMenuToggle} />
			{menuToggle ?	<Menu /> : children}

		</div>
	)
}

export default Layout