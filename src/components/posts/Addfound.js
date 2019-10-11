import React from 'react'
import Mymap from '../helpers/Mymap'
import { Modal, Button } from 'react-materialize';
import '../../App.css'

//des,lat,long,name,img
const Addfound = () => {
    const trigger = <Button>Open Modal</Button>;

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
							<form action='#'>
								<div class='file-field input-field'>
									<div class='btn'>
										<span>File</span>
										<input type='file' multiple />
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
									/>
									<label for='first_name'></label>
                                </div>
                                
                                <div >
                                <Button href="#modal1" className="modal-trigger">
                                
                                Show Modal
                                
                                </Button>
                                <Modal id="modal1" header="Modal Header" style={{maxHeight:"100%"}}>
                                <Mymap/>
                                </Modal>
                                </div>
                                
								<div class='input-field col s6'>
									<textarea
										rows='4'
										cols='50'
										placeholder='Description..'
									></textarea>
									<p>lat long</p>
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
