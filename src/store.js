import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import { logger } from './mmiddlewere/logger'

const state = {
	name: 'redux',
	counter: 0,
}

const reduser = (state, action) => {
	if (action.type === 'addNumber') {
		return {
			counter: state.counter + action.payload,
		}
	} else if (action.type === 'minisNumber') {
		return {
			counter: state.counter - action.payload,
		}
	} else {
		return state
	}
}

const store = createStore(reduser, state,  applyMiddleware(logger))
export default store
