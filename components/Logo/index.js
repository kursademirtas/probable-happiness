import Link from 'next/link';
import React from 'react'

function Logo() {
	return (
		<Link to="/" href="/">	
			<img src="https://res.cloudinary.com/dlt51mt3f/image/upload/v1615466792/brutalism/logo_black_wzrgyt.png" alt="logo" width="60px" height="48px" style={{cursor:'pointer'}}/>
		</Link>
	
	)
}

export default Logo;
