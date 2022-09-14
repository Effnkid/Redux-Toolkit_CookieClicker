import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = { coffeeCount: 0, totalCPS: 0 };

export const fetchCoffee = createAsyncThunk('coffee/fetchCoffee', async () => {
	const game = await JSON.stringify(localStorage.getItem('game'));
	return game;
});

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
			state.coffeeCount += action.payload;
		},
		setSavedCoffee(state, action) {
			state = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchCoffee.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(fetchCoffee.fulfilled, (state, action) => {
				state.status = 'succeeded';
				if (localStorage.getItem('game')) {
					const game = JSON.parse(localStorage.getItem('game'));
					state = game.coffee;
				}
				state.error = '';
			})
			.addCase(fetchCoffee.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
			});
	},
});

export const { increment, updateCPS, updateCoffee, setSavedCoffee } =
	coffeeSlice.actions;

export default coffeeSlice.reducer;
