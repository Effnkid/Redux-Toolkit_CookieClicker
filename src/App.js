import React from 'react';
import Coffee from './features/coffee/Coffee';
import Producers from './features/producers/Producers';
export default function App() {
	return (
		<div className="App">
			<div className="column-container">
				<Coffee />
				<Producers />
			</div>
		</div>
	);
}
