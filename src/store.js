import { createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
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
			counter: state.counter - action.payload
		}
	} else {
        return state;
    }

}

const store = createStore(reduser, state, composeWithDevTools())
// цю дію робить useDispach 
// store.dispatch({ type: 'addNumber', payload: 5 })
// store.dispatch({ type: 'minisNumber', payload: 2 })

export default store
