/**
 * Created by yujuan on 17-2-8.
 */
export const sendBlogContent = (data)=>{
  return {
    type:'BLOGCONTENT_SENT',
    data
  }
};

export const loadUserBlogs = ()=>{
  return {
    type:'USERBLOGS_LOADED'
  }
};
export const loadBlogDetail= (id)=>{
  return {
    type:'BLOGDETAIL_LOADED',
    id
  }
};


export const sendUpdateBlog = (data)=>{
  return{
    type:'BLOGUPDATED_SENT',
    data
  }
};



