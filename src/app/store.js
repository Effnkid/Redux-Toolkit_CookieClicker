import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import coffeeSlice from '../features/coffee/coffeeSlice';
import producersSlice from '../features/producers/producersSlice';

export const store = configureStore({
	reducer: { coffee: coffeeSlice, producers: producersSlice },
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
