import React from 'react'
import Mymap from '../helpers/Mymap'
//des,lat,long,name,img
const Addfound = () => {
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
                                
                                <div class='input-field col s6'>
                        <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

                    
                        <div id="modal1" class="modal">
                            <div class="modal-content">
                            <h4>Modal Header</h4>
                            <p>A bunch of text</p>
                            </div>
                            <div class="modal-footer">
                            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                            </div>
                        </div>
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
