import React, { useState } from 'react';

import InputForm from '../InputForm/InputForm';
import Guesses from '../Guesses/Guesses';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.log({ answer });

function Game() {
	const [value, setValue] = useState("");
	const [list, setList] = useState([]);
	const [status, setStatus] = useState("");

	const checkCorrectedness = (data) => {
		if (answer === data && list.length <= NUM_OF_GUESSES_ALLOWED) {
			setStatus("success");
		} else if (answer !== data && list.length === NUM_OF_GUESSES_ALLOWED - 1) {
			setStatus('failure');
		}

	};
	return <>
		<Guesses list={list} answer={answer} />
		<InputForm value={value} setValue={setValue} setList={setList} list={list} checkCorrectedness={checkCorrectedness} status={status} />
		<Banner status={status} answer={answer} guesses={list.length} />
	</>;
}

export default Game;
