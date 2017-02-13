import { combineReducers } from 'redux';
import blogMessage from './blogMessage';
import blogDetail from './blogDetail';
const resultList = combineReducers({
  blogMessage,
  blogDetail
});

export default resultList;
