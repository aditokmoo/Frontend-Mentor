import { useState } from 'react';
// CSS
import './css/personalInfo.css'

export const PersonalInfo = ({ formData, setFormData, errorMessage }) => {
	const [ focus, setFocus ] = useState(false);

	const inputConfig = [
		{
			uid: 1,
			id: 'name',
			name: 'name',
			placeholder: 'Enter your name...',
			type: 'text',
			label: 'Name',
			error: errorMessage.nameError,
			required: true
		},
		{
			uid: 2,
			id: 'email',
			name: 'email',
			placeholder: 'Enter your email...',
			type: 'email',
			label: 'Email Address',
			error: errorMessage.emailError,
			required: true
		},
		{
			uid: 3,
			id: 'number',
			name: 'number',
			placeholder: 'Enter your phone number...',
			type: 'text',
			label: 'Phone Number',
			error: errorMessage.numberError,
			required: true
		}
	];

	const handleFocus = () => {
		setFocus(true);
	};

	const handleChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value
		}));
	};

	return (
		<>
			<h1>Personal info</h1>
			<p>Please provide your name, email address, and phone number.</p>
				{inputConfig.map((data) => (
					<div className="input-container" key={data.uid}>
						<label htmlFor="name">{data.label}</label>
						<input
							type={data.type}
							id={data.id}
							name={data.name}
							value={data[formData.value]}
							placeholder={data.placeholder}
							onChange={handleChange}
							onBlur={handleFocus}
							focused={focus.toString()}
						/>
						<span>{data.error}</span>
					</div>
				))}
		</>
	);
};
