import Btn from './Btn'
import { useSelector, useDispatch } from 'react-redux'

export default function Counter() {
	const counterValue = useSelector((state) => {
		return state.counter
	})

	const dispatch = useDispatch()
	function maxCount() {
		dispatch({ type: 'addNumber', payload: 1 })
	}
	function minCount() {
		dispatch({ type: 'minisNumber', payload: 1 })
	}

	return (
		<>
			<h1>{counterValue}</h1>
			<Btn click={maxCount} title={+1}></Btn>
			<Btn click={minCount} title={-1}></Btn>
		</>
	)
}
