import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UnluckedProducer from './UnluckedProducer';
import {
	fetchProducers,
	getProducersStatus,
	getUnluckedProducers,
	unluckProducers,
} from './producersSlice';

const Producers = () => {
	const dispatch = useDispatch();

	const [coffeeCount, setCoffeeCount] = React.useState(0);
	const [unlucks, setUnlucks] = React.useState([]);

	const producersStatus = useSelector(getProducersStatus);
	const state = useSelector((state) => state);
	const isUnlucked = useSelector(getUnluckedProducers);

	React.useEffect(() => {
		if (producersStatus === 'idle') {
			dispatch(fetchProducers());
		}
	}, [dispatch]);

	React.useEffect(() => {
		setCoffeeCount(state.coffee.coffeeCount);
		dispatch(unluckProducers(state.coffee.coffeeCount));
		setUnlucks(isUnlucked);
	}, [state]);

	return (
		<div className="column">
			<div className="column-header"> Coffee Producers </div>
			<div className="container right" id="producer_container">
				{!unlucks
					? 'LOADING...'
					: unlucks.map((producer) => (
							<UnluckedProducer
								key={producer.id}
								producer={producer}
								coffeeCount={coffeeCount}
							/>
					  ))}
			</div>
			<div className="container bottom" id="upgrade_container"></div>
		</div>
	);
};

export default Producers;
