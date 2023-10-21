import React from 'react';

function Banner({ status, guesses, answer }) {
	return <div>
		{status === "success" ?
			(<div className='happy banner'>
				<p>
					<strong>Congratulations!</strong> Got it in 
					<strong> {guesses} guesses</strong>
				</p>

			</div>) : status === "failure" ?
				(<div className='sad banner'>
					<p>Sorry, the correct answer is <strong>{answer}</strong>.</p>

				</div>)
				: ""
		}
	</div>;
}

export default Banner;
