import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/Auth/authContext'

const Topnav = props => {
	const authContext = useContext(AuthContext)
	const { logout, isAuthenticated, loaduser } = authContext

	const onLogout = () => {
		logout()
	}

	const guestlink = (
		<>
			<li>
				<Link to='/login'>login</Link>
			</li>
			<li>
				<Link to='/register'>register</Link>
			</li>
		</>
	)

	const userlink = (
		<>
			<li>
				<Link to='/login' onClick={onLogout}>logout</Link>
			</li>
			<li>
				<Link to='/test'>my posts</Link>
			</li>
			
			<li>
				<Link to='/addpost'>Add Posts</Link>
			</li>
		</>
	)
	useEffect(() => {
		loaduser()
		// eslint-disable-next-line
	}, [])
	

	return (
		<nav>
			<div className='nav-wrapper purple'>
				<ul id='nav' className='left'>
					<li>
						<Link id='logo' to='/'>
							lostbutfound
						</Link>
					</li>
				</ul>

				<ul id='nav' className='right'>
					{isAuthenticated ? userlink : guestlink}
				</ul>
			</div>
		</nav>
	)
}

export default Topnav