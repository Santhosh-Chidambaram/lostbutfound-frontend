import React, { useEffect, useContext, useState } from 'react'
import authContext from '../../context/Auth/authContext'

export const Registercard = props => {
	const { register, isAuthenticated } = useContext(authContext)

	const [state, setstate] = useState({
		name: '',
		email: '',
		phone: '',
		password: ''
	})

	const _onsubmit = e => {
		e.preventDefault()
		console.log('submitted')

		register(state)
	}

	const _onchange = e => {
		setstate({
			...state,
			[e.target.name]: e.target.value
		})
	}

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/test')
		}
		//eslint-disable-next-line
	}, [isAuthenticated])

	return (
		<div
			className='container'
			style={{ position: 'absolute', left: '35%', top: '20%' }}
		>
			<div
				className='card z-depth-5  '
				style={{ width: '30rem', height: '70vh', borderRadius: '10px' }}
			>
				<div className='card-content ' style={{ textAlign: 'center' }}>
					<span className='card-title'>
						<b>REGISTER</b>{' '}
					</span>
					<div>
						<div className='input-field col s12'>
							<input
								id='email'
								type='email'
								className='validate'
								name="email"
								value={state.email}
								onChange={_onchange}
							/>
							<label htmlFor='email'>Email</label>
						</div>
						<div className='input-field col s12'>
							<input
								id='username'
								type='text'
								name="name"
								className='validate'
								value={state.name}
								onChange={_onchange}
							/>
							<label htmlFor='username'>Username</label>
						</div>
						<div className='input-field col s6'>
							<input
								id='icon_telephone'
								type='tel'
								name="phone"
								className='validate'
								value={state.phone}
								onChange={_onchange}
							/>
							<label htmlFor='icon_telephone'>Telephone</label>
						</div>

						<div className='input-field col s12'>
							<input
								id='password'
								type='password'
								className='validate'
								name="password"
								value={state.password}
								onChange={_onchange}
							/>
							<label htmlFor='password'>Password</label>
						</div>
						<div className='input-field col s12'>
							<input id='password' type='password' className='validate' />
							<label htmlFor='password'>Repeat Password</label>
						</div>
						<div style={{ marginTop: '5%' }}>
							<button
								onClick={_onsubmit}
								className='waves-effect waves-light btn-large z-depth-3'
								style={{
									width: '50%',
									borderRadius: '500px',
									background: 'linear-gradient(to right, #8e2de2, #4a00e0)'
								}}
							>
								register
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
