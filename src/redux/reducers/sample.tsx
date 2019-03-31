import {
  SAMPLE_ACTION,
} from '../actions/actionTypes'

const initialState: SampleReducer = {
  reduxWorker: true,
}

const sampleReducer = (state: SampleReducer = initialState, action: ReduxAction) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return {
        ...state,
        reduxWork: false,
      }
    default:
      return state
  }
}

export default sampleReducer
