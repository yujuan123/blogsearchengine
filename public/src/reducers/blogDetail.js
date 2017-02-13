/**
 * Created by yujuan on 17-2-12.
 */
const blogDetail = (state={},action)=>{
  switch(action.type){
    case 'BLOGDETAIL_SHOWED':
      return action.data;
  }
  return state;
};

export default blogDetail;