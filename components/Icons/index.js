

function Icons({vertical}) {
	return (

		<div className={ vertical ? "icons_vertical" : "icon_group"  }>
			<a href="https://www.facebook.com/"><img src="https://res.cloudinary.com/dlt51mt3f/image/upload/v1615486678/brutalism/facebook_-_FontAwesome_h8bidl.png" alt="facebook icon"/></a>
		<a href="https://instagram.com/"><img src="https://res.cloudinary.com/dlt51mt3f/image/upload/v1615486695/brutalism/social-instagram_-_simple-line-icons_wj2z4h.png" alt="instagram icon"/></a>
		<a href="https://twitter.com/"><img src="https://res.cloudinary.com/dlt51mt3f/image/upload/v1615486668/brutalism/twitter_-_FontAwesome_wr3sle.png" alt="twitter icon"/>
</a>	
		</div>
	)
}

export default Icons;
