import React, { useState } from 'react';
import '../inputPage/inputPage.css';

const FreeTrial = () => {
	const [email, setEmail] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleSubmit = () => {
		if (email.trim() === '') {
			alert('Please, enter email!');
			return;
		}
		setIsModalOpen(true);
	};

	return (
		<div className='container'>
			<div className='text'>
				<h2>Powering your business</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit nemo <br />{' '}
					expedita voluptas culpa sapiente.
				</p>

				<div className='input-container'>
					<input
						type='email'
						placeholder='Your email'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<button onClick={handleSubmit}>Start free trial</button>
				</div>

				<p>7 days free trial. No credit card required.</p>

				{isModalOpen && (
					<div className='modal'>
						<div className='modal-content'>
							<h1>Modal</h1>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Reprehenderit necessitatibus magni porro quod
								eius autem.
							</p>
							<h2>
								Sizning emailingiz : <strong>{email}</strong>
							</h2>
							<button onClick={() => setIsModalOpen(false)}>
								Close
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default FreeTrial;
