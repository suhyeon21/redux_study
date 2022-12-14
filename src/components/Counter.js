import { useSelector, useDispatch } from 'react-redux';
//reducer 이름을 키로 가진 객체 형식
import { counterActions } from '../store/counterSlice';
import classes from './Counter.module.css';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter.counter);
	const show = useSelector((state) => state.counter.showCounter);

	const incrementHandler = () => {
		// dispatch({ type: 'increment' });
		dispatch(counterActions.increment());
	};

	const increaseHandler = () => {
		// dispatch({ type: 'increase', amount: 5 });
		dispatch(counterActions.increase(10));
	};
	const decrementHandler = () => {
		// dispatch({ type: 'decrement' });
		dispatch(counterActions.decrement());
	};

	const toggleCounterHandler = () => {
		// dispatch({ type: 'toggle' });
		dispatch(counterActions.toggleCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>increment</button>
				<button onClick={increaseHandler}>increase by 5</button>
				<button onClick={decrementHandler}>decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
