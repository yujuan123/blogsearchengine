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
    var blogDetailContent = document.getElementById("blog-content");
    var blogName = this.props.blogDetail.blogName;
    var blogContent = this.props.blogDetail.blogContent;
    blogDetailName.innerHTML = "<input id='name-input' type='text'  value='" + blogName + "'  />";
    blogDetailContent.innerHTML = "<textarea id='content-input' rows='60' cols='81'>" + blogContent + "</textarea>"
  },
  updateClick(){
    var blogNameInput = document.getElementById("name-input").value;
    var blogContentInput = document.getElementById("content-input").value;
    document.getElementById("blog-name").innerHTML = blogNameInput;
    document.getElementById("blog-content").innerHTML = blogContentInput;
    this.props.sendUpdateBlog({
      blogId: this.props.params.id,
      blogName: blogNameInput,
      blogContent: blogContentInput
    });
    console.log("此篇博客：" + this.props.params.id);
    console.log("博客标题：" + blogNameInput);
  },
  deleteClick(){
    if (confirm("确定要删除吗？")) {
      this.props.sendDeleteBlog(this.props.params.id);
    }
  },
  render() {
    let {blogName, blogContent, userName, publishDate} = this.props.blogDetail;
    return (
        <div className="blog-body">
          <div className="row">
            <div className="col-md-4">
              <h1 id="blog-name" className="blog-title ">{blogName}</h1>
              <h4>作者：{userName}  |  {publishDate}</h4>
            </div>
            <div className="button-group col-md-offset-4 col-md-4">
              <ul className="list-inline">
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
            </div>
          </div>
          <p className="row" id="blog-content">{blogContent}</p>
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
  sendUpdateBlog: (data)=> {
    dispatch(sendUpdateBlog(data));
  }
});
const BlogDetailPackage = connect(mapStateToProps, mapDispatchToProps)(BlogDetail);
export default BlogDetailPackage;
