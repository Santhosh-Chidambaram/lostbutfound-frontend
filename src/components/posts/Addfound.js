import React, { useState } from 'react'
import Mymap from '../helpers/Mymap'
import { Modal, Button } from 'react-materialize'
import '../../App.css'

//des,lat,long,name,img
const Addfound = () => {
	const trigger = <Button>Open Modal</Button>

	const [fstate, setfstate] = useState({
		name: '',
		lat: '',
		lng: '',
		file: null
	})

	const _onchange = e => {
		setfstate({
			...fstate,
			[e.target.name]: e.target.value
		})
	}


	const onFormSubmit = (e) => {
		e.preventDefault() // Stop form submit


		//send req
		
	}
	const onChange = (e) => {
		setfstate({...fstate, file: e.target.files[0] })
	}
	

	return (
		<div>
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
							<b>FOUND</b>{' '}
						</span>
						<div style={{ marginTop: '20%' }}>
							<form onSubmit={onsubmit}>
								<div class='file-field input-field'>
									<div class='btn'>
										<span>File</span>
										<input type='file' onChange={onChange}/>
									</div>
									<div class='file-path-wrapper'>
										<input
											class='file-path validate'
											type='text'
											placeholder='Upload one or more files'
										/>
									</div>
								</div>
								<div class='input-field col s6'>
									<input
										placeholder='Person Name..'
										id='name'
										type='text'
										class='validate'
										name="name"
										value={fstate.name}
										onChange={_onchange}
									/>
									<label for='first_name'></label>
								</div>
								<div>
									<Button href='#modal1' className='modal-trigger'>
										Select Location
									</Button>
									<Modal
										id='modal1'
										header='choose your location'
										style={{ maxHeight: '100%' }}
									>
										<Mymap data={{fstate, setfstate}}/>
									</Modal>
								</div>
							</form>

							<div style={{ marginTop: '15%' }}>
								<button
									className='waves-effect waves-light btn-large z-depth-3'
									style={{
										width: '50%',
										borderRadius: '500px',
										background: 'linear-gradient(to right, #8e2de2, #4a00e0)'
									}}
								>
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Addfound
