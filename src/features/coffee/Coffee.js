import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, updateCoffee } from './coffeeSlice';
const Coffee = () => {
	const dispatch = useDispatch();

	const coffeeCount = useSelector((state) => state.coffee.coffeeCount);
	const totalCPS = useSelector((state) => state.coffee.totalCPS);

	React.useEffect(() => {
		setTimeout(() => {
			tick(totalCPS);
		}, 1000);
	}, []);

	const handleClick = (event) => {
		event.preventDefault();
		dispatch(increment());
	};
	const tick = (cps) => {
		dispatch(updateCoffee(cps));
	};
	return (
		<>
			<button id="reset">reset</button>
			<div className="column">
				<div className="container left">
					<div className="counter-container">
						Coffee: <span id="coffee_counter">{coffeeCount}</span>
					</div>
					<div className="cps-container">
						<span id="cps">{totalCPS}</span> coffee/second
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
