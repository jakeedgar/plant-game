

export const stateHandler = (prop) => {
  return(value) => {
    return(state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    }) 
  }
}