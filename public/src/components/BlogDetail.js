/**
 * Created by yujuan on 17-2-11.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadBlogDetail} from '../actions/index';
import {sendUpdateBlog} from '../actions/index';

var BlogDetail = React.createClass({
  /*componentDidMount发生在render之前...*/
  componentDidMount() {
    /*为什么要发送id
     * --因为要根据id 找 到对应的博客并显示*/
    this.props.getBlogId(this.props.params.id);
  },
  editClick(){
    var blogDetailName = document.getElementById("blog-name");
    var blogName = this.props.blogDetail.blogName;
    blogDetailName.innerHTML = "<input id='name-input' type='text'  value='" + blogName + "'  />";
  },
  updateClick(){
    var blogNameInput = document.getElementById("name-input").value;
    document.getElementById("blog-name").innerHTML = blogNameInput;
    this.props.sendUpdateBlog({
      blogId:this.props.params.id,
      blogName:blogNameInput
    });
    console.log("此篇博客："+this.props.params.id);
    console.log("博客标题："+blogNameInput);
  },
  deleteClick(){
    this.props.sendDeleteBlog(this.props.params.id);
  },
  render() {
    return (
        <div>
          <div className="row">
            <ul className="list-inline">
              <li>
                <button type="button" className="btn-info btn-xs">My Blogs</button>
              </li>
              <li>
                <button type="button" className="btn-info btn-xs" onClick={this.editClick}>Edit Blogs</button>
              </li>
              <li>
                <button type="button" className="btn-success btn-xs" onClick={this.updateClick}>Update
                  Blogs
                </button>
              </li>
              <li>
                <button type="button" className="btn-danger btn-xs" onClick={this.deleteClick}>Delete Blogs
                </button>
              </li>
            </ul>
            <h3>Here my blogs</h3>
          </div>
          <form className="row blog-newed">
            <span className="font-style">Blog Name</span>
            <span className="iconfont icon-biaoti"> </span>

            <p id="blog-name">{this.props.blogDetail.blogName} </p>
          </form>
        </div>
    );
  }
});

const mapStateToProps = (state)=> {
  return state;
};
const mapDispatchToProps = (dispatch)=>({
  getBlogId: (id)=> {
    dispatch(loadBlogDetail(id));
  },
  sendDeleteBlog: (id)=> {
    dispatch({
      type: 'BLOG_DELETED',
      id
    })
  },
  sendUpdateBlog:(data)=>{
    dispatch(sendUpdateBlog(data));
  }
});
const BlogDetailPackage = connect(mapStateToProps, mapDispatchToProps)(BlogDetail);
export default BlogDetailPackage;
