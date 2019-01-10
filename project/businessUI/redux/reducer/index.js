const initialState = {
  number: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      let { number } = state
      return Object.assign({}, state, { number: ++number })
    default: 
      return state
  }
}