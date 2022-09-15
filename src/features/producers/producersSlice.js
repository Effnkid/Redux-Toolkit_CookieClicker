import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { producers: [], status: 'idle', error: null };

export const fetchProducers = createAsyncThunk(
	'producers/fetchProducers',
	async () => {
		try {
			const { data } = await axios.get('/api/producers');
			return data;
		} catch (err) {
			return err;
		}
	}
);

const producersSlice = createSlice({
	name: 'producers',
	initialState,
	reducers: {
		unluckProducers(state, action) {
			state.producers
				.filter((producer) => action.payload >= producer.price / 2 - 1)
				.map((producer) => (producer.unlucked = true));
		},
		updateProducer(state, action) {
			const updateProducer = state.producers.find(
				(producer) => producer.id === action.payload
			);
			updateProducer.qty += 1;
			updateProducer.price = Math.floor(updateProducer.price * 1.25);
		},
		setSavedProducers(state, action) {
			state = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchProducers.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(fetchProducers.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.producers = [...action.payload];
				state.error = '';
			})
			.addCase(fetchProducers.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
			});
	},
});

export const getProducersStatus = (state) => state.producers.status;
export const getUnluckedProducers = (state) =>
	state.producers.producers.filter((producer) => producer.unlucked === true);

export const { unluckProducers, updateProducer, setSavedProducers } =
	producersSlice.actions;
export default producersSlice.reducer;
