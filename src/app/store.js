import { configureStore, combineReducers } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import coffeeSlice from '../features/coffee/coffeeSlice';
import producersSlice from '../features/producers/producersSlice';

const rootReducer = combineReducers({
	coffee: coffeeSlice,
	producers: producersSlice,
});

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(logger),
});

export const persistor = persistStore(store);
