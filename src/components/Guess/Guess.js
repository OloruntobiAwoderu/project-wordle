import React from 'react';

import { checkGuess } from "../../game-helpers";

function Guess({ list, answer }) {
	return <div>
		<p className="guess">
			{checkGuess(list, answer).map((letter, index) => (
				<span key={index} className={`cell ${letter.status}`}>{letter.letter}</span>
			))}
		</p>
	</div>;
}

export default Guess;
