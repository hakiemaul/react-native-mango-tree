import { combineReducers } from 'redux'

import treeReducers from './treeReducers'

export default combineReducers({
  tree: treeReducers
})