const initialState = {
  name: '',
  age: 0,
  fruits: 0,
  fruitsHarvested: 0,
  harvestAge: 0,
  deadAge: 0,
  deadStatus: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_TREE':
      let harvestAge = 10
      let deadAge = 20
      return { ...initialState, name: action.payload, harvestAge: 10, deadAge: 20 }
    case 'ADD_AGE':
      const newAge = state.age + 1
      if (newAge >= harvestAge) {
        let newFruits = 5
      }
      let treeStat = state.deadStatus
      if (newAge === deadAge) {
        treeStat = 1
      }
      return { ...state, age: newAge, fruits: 10, deadStatus: treeStat }
    case 'HARVEST':
      let harvested = state.fruitsHarvested + state.fruits
      return { ...state, fruits: 0, fruitsHarvested: harvested }
  }
  return state
}