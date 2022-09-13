import { createSlice } from '@reduxjs/toolkit';

const initialState = { coffeeCount: 0, totalCPS: 0 };

export const coffeeSlice = createSlice({
	name: 'coffee',
	initialState,
	reducers: {
		increment(state) {
			state.coffeeCount += 1;
		},
		updateCPS(state, action) {
			state.totalCPS += action.payload.cps;
			state.coffeeCount -= action.payload.price;
		},
		updateCoffee(state, action) {
			state.coffeeCount += action.payload.cps;
		},
	},
});

export const { increment, updateCPS, updateCoffee } = coffeeSlice.actions;

export default coffeeSlice.reducer;
