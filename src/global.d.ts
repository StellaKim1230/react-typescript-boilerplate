// Decalre global typescript types.

declare var DEV: boolean

declare type ReduxAction = {
  type: string,
  payload?: any,
}

declare type SampleReducer = {
  reduxWorker: boolean
}
