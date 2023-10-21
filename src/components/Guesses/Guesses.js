import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from "../Guess/Guess";



const Guesses = ({ list, answer }) => {


	return (
		<div className="guess-results">
			{list.map((list, index) => (
				<Guess list={list} answer={answer} key={index} />

			))}{NUM_OF_GUESSES_ALLOWED - list.length !== 0 ? range(0, NUM_OF_GUESSES_ALLOWED - list.length).map((item, index) => (
				<p className="guess" key={index}>
					{range(0, 5).map((item, index) => (
						<span key={index} className="cell"></span>
					))}

				</p>
			)) : ""}
		</div>
	);
};

export default Guesses;