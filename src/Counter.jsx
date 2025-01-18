import { useState } from 'react'
import Btn from './Btn'
import { useSelector , useDispatch } from 'react-redux'



export default function Counter() {
	// const [count, setCount] = useState(0)
const counterValue = useSelector((state) => {
    return state.counter
})

const dispatch = useDispatch()
	function maxCount() {
dispatch({ type: 'addNumber', payload: 5 })
		// const newCount = count + 1
		// setCount(newCount)
	}
	function minCount() {
        dispatch({ type: 'minisNumber', payload: 2 })
		// const newCount = count - 1
		// setCount(newCount)
	}

	return (
		<>
			<h1>{counterValue}</h1>
			<Btn click={maxCount} title={+1}></Btn>
			<Btn click={minCount} title={-1}></Btn>
		</>
	)
}
