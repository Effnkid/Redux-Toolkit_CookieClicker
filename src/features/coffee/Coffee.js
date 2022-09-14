import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, updateCoffee } from './coffeeSlice';
const Coffee = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	const { coffee } = state;

	React.useEffect(() => {
		const timer = setTimeout(() => {
			tick(coffee.totalCPS);
		}, 1000);

		return () => {
			clearTimeout(timer);
		};
	});

	React.useEffect(() => {
		coffee.coffeeCount !== 0 &&
			localStorage.setItem('game', JSON.stringify(state));
	}, [coffee]);

	const handleClick = (event) => {
		event.preventDefault();
		dispatch(increment());
	};

	const tick = (cps) => {
		coffee.totalCPS && dispatch(updateCoffee(cps));
	};

	return (
		<>
			<button id="reset">reset</button>
			<div className="column">
				<div className="container left">
					<div className="counter-container">
						Coffee: <span id="coffee_counter">{coffee.coffeeCount}</span>
					</div>
					<div className="cps-container">
						<span id="cps">{coffee.totalCPS}</span> coffee/second
					</div>
					<div id="big_coffee" onClick={handleClick}>
						☕️
					</div>
				</div>
			</div>
		</>
	);
};

export default Coffee;
