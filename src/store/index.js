// import { createStore } from 'redux';

import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

//더이상 if문 쓸 필요가 없음
//redux-toolkit과 createSlice 사용하면 기존 상태값 바뀌지 않음
//자동으로 원래 있는 상태를 복사한다고 함
const counterSlice = createSlice({
	name: 'counter',
	initialState,
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

//redux
// const counterReducer = (state = initialState, action) => {
// 	if (action.type === 'increment') {
// 		return {
// 			counter: state.counter + 1,
// 			showCounter: state.showCounter,
// 		};
// 	}

// 	if (action.type === 'increase') {
// 		return {
// 			counter: state.counter + action.amount,
// 			showCounter: state.showCounter,
// 		};
// 	}

// 	if (action.type === 'decrement') {
// 		return {
// 			counter: state.counter - 1,
// 			showCounter: state.showCounter,
// 		};
// 	}

// 	if (action.type === 'toggle') {
// 		return {
// 			showCounter: !state.showCounter,
// 			counter: state.counter,
// 		};
// 	}
// 	return state;
// };

//모든 리듀서를 하나의 큰 리듀서로 병합
const store = configureStore({
	//reducer 여러개 일때 이렇게 사용
	// reducer: { counter: counterSlice.reducer },
	reducer: counterSlice.reducer,
});

//액션 객체를 생성하고 고유한 식별자를 생성할 필요 없음
export const counterActions = counterSlice.actions;
export default store;
