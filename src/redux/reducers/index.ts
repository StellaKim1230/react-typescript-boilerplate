import { combineReducers } from 'redux'
import sampleReducer from './sample'

const reducers = combineReducers({
  sample: sampleReducer,
})

export default reducers
