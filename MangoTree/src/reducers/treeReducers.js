const initialState = {
  name: '',
  age: 0,
  fruits: 0,
  fruitsHarvested: 0,
  harvestAge: 0,
  deadAge: 0,
  deadStatus: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_TREE':
      let harvestAge = 10
      let deadAge = 20
      return { ...state, name: action.payload, harvestAge: 10, deadAge: 20 }
    case 'ADD_AGE':
      let newAge = state.age + 1
      let newFruits = state.fruits
      if (newAge >= harvestAge) {
        newFruits = Math.floor(Math.random() * 10) + 1
      }
      let treeStat = state.deadStatus
      if (newAge === deadAge) {
        treeStat = true
      }
      return { ...state, age: newAge, fruits: newFruits, deadStatus: treeStat }
    case 'HARVEST':
      let harvested = state.fruitsHarvested + state.fruits
      return { ...state, fruits: 0, fruitsHarvested: harvested }
    default:
      return state
  }
}