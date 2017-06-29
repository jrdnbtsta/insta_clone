
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import posts from './posts';
import comments from './comments';
// only one reducer can be fired off per action; index locates correct reducer

const rootReducer = combineReducers({ posts, comments, routing: routerReducer });

export default rootReducer;