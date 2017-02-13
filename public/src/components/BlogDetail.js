/**
 * Created by yujuan on 17-2-11.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadBlogDetail} from '../actions/index';
/*思路：
 发送id ,然后根据id 找 到所有数据并显示
 * */
class BlogDetail extends Component {
  /*componentDidMount发生在render之前...*/
  componentDidMount() {
    /*为什么要发送id
     * --因为要根据id 找 到对应的博客并显示*/
    this.props.getBlogId(this.props.params.id);
  }
  updateClick(){
    

  }
  deleteClick(){
    this.props.sendDeleteBlog(this.props.params.id);
  }
  render() {
    return (
        <div>
          <div className="row">
            <ul className="list-inline">
              <li>
                <button type="button" className="btn-info btn-xs">My Blogs</button>
              </li>
              <li>
                <button type="button" className="btn-success btn-xs" onClick={this.updateClick.bind(this)}>Update Blogs</button>
              </li>
              <li>
                <button type="button" className="btn-danger btn-xs" onClick={this.deleteClick.bind(this)}>Delete Blogs</button>
              </li>
            </ul>
            <h3>Here my blogs</h3>
          </div>
          <form className="row blog-newed">
            <span className="font-style">Blog Name</span>
            <span className="iconfont icon-biaoti"> </span>
            <input  type="text" className="form-control blog-name" defaultValue={this.props.blogDetail.blogName||""}/>
            <span className="font-style">Write Here</span>
            <span className="iconfont icon-write"> </span>
            <textarea  className="form-control" rows="10" cols="10">{this.props.blogDetail.blogContent}</textarea>
            <span className="font-style">Enter Some Tags</span>
            <span className="iconfont icon-biaoqian"> </span>
            <input  type="text" className="form-control blog-tags" defaultValue={this.props.blogDetail.blogTag||""}/>
          </form>
        </div>
    );
  }
}
const mapStateToProps = (state)=> {
  return state;
};
const mapDispatchToProps = (dispatch)=>({
  getBlogId: (id)=> {
    dispatch(loadBlogDetail(id));
  },
  sendDeleteBlog:(id)=>{
    dispatch({
      type:'BLOG_DELETED',
      id
    })
  }
  
  
});
const BlogDetailPackage = connect(mapStateToProps, mapDispatchToProps)(BlogDetail);
export default BlogDetailPackage;
