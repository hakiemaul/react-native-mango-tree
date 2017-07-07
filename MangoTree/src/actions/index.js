export const startTree = (name) => {
  return {
    type: 'START_TREE',
    payload: name
  }
}

export const addAge = () => {
  return {
    type: 'ADD_AGE'
  }
}

export const harvest = () => {
  return {
    type: 'HARVEST'
  }
}