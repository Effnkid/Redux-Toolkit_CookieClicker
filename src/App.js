import React from 'react';
import Coffee from './features/coffee/Coffee';
import Producers from './features/producers/Producers';
import { setSavedCoffee } from './features/coffee/coffeeSlice';
import {
	setSavedProducers,
	getProducersStatus,
} from './features/producers/producersSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	const status = useSelector(getProducersStatus);

	// React.useEffect(() => {
	// 	if (localStorage.getItem('game')) {
	// 		console.log('HEREEEEEEEEE');
	// 		const game = JSON.parse(localStorage.getItem('game'));
	// 		dispatch(setSavedCoffee(game.coffee));
	// 		dispatch(setSavedProducers(game.producers));
	// 	}
	// 	// if (status === 'succeeded') {
	// 	// 	const game = JSON.parse(localStorage.getItem('game'));
	// 	// 	dispatch(setSavedCoffee(game.coffee));
	// 	// 	dispatch(setSavedProducers(game.producers));
	// 	// }
	// }, [status === 'succeeded']);

	return (
		<div className="App">
			<div className="column-container">
				<Coffee />
				<Producers />
			</div>
		</div>
	);
}
