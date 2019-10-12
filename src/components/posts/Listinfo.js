import React from 'react'
import authbg from '../../authbg.jpg'
export default function Listinfo(props) {
	return (
		<div className='row'>
			<div className='col s6 ' style={{ width: '50%', paddingTop: '50px' }}>
				<div className='card' style={{ width: '60%', margin: 'auto' }}>
					<div className='card-image waves-effect waves-block waves-light'>
						<img className='activator' src={authbg} alt='haha' />
					</div>
					<div className='card-content'>
						<span className='card-title activator grey-text text-darken-4'>
							Person Name:<i className='material-icons right'>more_vert</i>
						</span>
						<p>
							<a href='/'>This is a link</a>
						</p>
					</div>
					<div className='card-reveal'>
						<span className='card-title grey-text text-darken-4'>
							<b>Person Name</b>
							<i className='material-icons right'>close</i>
						</span>

						<ul className='collection with-header'>
							<li className='collection-item'>Email:</li>
							<li className='collection-item'>Phone No:</li>
							<li className='collection-item'>Description:</li>
							<li className='collection-item'>Location:</li>
							<li className='collection-item'>DateLost:</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
