import { createSlice } from '@reduxjs/toolkit';
const initialCounterState = { counter: 0, showCounter: true };

//더이상 if문 쓸 필요가 없음
//redux-toolkit과 createSlice 사용하면 기존 상태값 바뀌지 않음
//자동으로 원래 있는 상태를 복사한다고 함
const counterSlice = createSlice({
	name: 'counter',
	initialState: initialCounterState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter += action.payload;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
