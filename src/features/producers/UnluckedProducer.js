import React from 'react';
import { useDispatch } from 'react-redux';
import { updateProducer } from './producersSlice';
import { updateCPS } from '../coffee/coffeeSlice';

const UnluckedProducer = ({ producer, coffeeCount }) => {
	const dispatch = useDispatch();
	React.useEffect(() => {}, [producer]);

	const handleBuy = (event) => {
		event.preventDefault();

		if (coffeeCount >= producer.price) {
			const coffee = {
				cps: producer.cps,
				price: producer.price,
				id: producer.id,
			};

			dispatch(updateCPS(coffee));
			dispatch(updateProducer(producer.id));
		} else {
			alert('not enough coffee');
		}
	};

	return (
		<div className="producer">
			<div className="producer-column">
				<div className="producer-title">{producer.displayName}</div>
				<button type="button" id={`buy_${producer.name}`} onClick={handleBuy}>
					Buy
				</button>
			</div>
			<div className="producer-column">
				<div>Quantity: {producer.qty}</div>
				<div>Coffee/second: {producer.cps}</div>
				<div>Cost: {producer.price} coffee</div>
			</div>
		</div>
	);
};

export default UnluckedProducer;
