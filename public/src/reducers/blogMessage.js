/**
 * Created by yujuan on 17-2-11.
 */
const blogMessage = (state=[],action)=>{
  switch(action.type){
    case 'BLOGCONTENT_SHOWED':
      return action.data;
  }
  return state;
};
export default blogMessage;
