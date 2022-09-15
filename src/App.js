import React from 'react';
import Coffee from './features/coffee/Coffee';
import Producers from './features/producers/Producers';
import { persistor } from './app/store';
export default function App() {
	const handlePurge = () => {
		persistor.purge();
	};

	return (
		<div className="App">
			<div className="column-container">
				<button id="reset" onClick={handlePurge}>
					reset
				</button>
				<Coffee />
				<Producers />
			</div>
		</div>
	);
}
