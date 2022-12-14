// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './authSlice';
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
	reducer: { counter: counterReducer, auth: authReducer },
});

//액션 객체를 생성하고 고유한 식별자를 생성할 필요 없음

export default store;
