import React, { useState } from 'react';

const InputForm = ({ value, setValue, list, setList, checkCorrectedness, status }) => {



	const onSubmit = (e) => {
		e.preventDefault();
		console.log({ 'answer': value });
		setValue("");
		setList([...list, value]);
		checkCorrectedness(value);
	};

	return (
		<form className='guess-input-wrapper' onSubmit={onSubmit}>
			<label htmlFor='guess-input'>Enter guess:</label>
			{status === "" ?
				<input id='guess-input' type='text' pattern="\w{5,5}" value={value.toUpperCase()} onChange={(e) => setValue(e.target.value.toUpperCase())} required />
				: ""}
		</form>
	);
};

export default InputForm;