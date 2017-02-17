/**
 * Created by yujuan on 17-2-5.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import UserCenter from "./UserCenter";
import {sendBlogContent} from '../actions/index';

class BlogNewed extends Component {
  handleClick() {
    var blogName = this.refs.blogName.value.trim();
    var blogContent = this.refs.blogContent.value.trim();
    var blogTag = this.refs.blogTag.value.trim();
    console.log("博客标题 为：" + blogName);
    console.log("博客内容 为:" + blogContent);
    console.log("博客标签 为: " + blogTag);
    
    /*获取发表时间*/
    var date = new Date();
    var publishDate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    /*下一步：发送数据*/
    this.props.sendBlogMessage({
      blogName: blogName,
      blogContent: blogContent,
      blogTag: blogTag,
      publishDate: publishDate
    });
  }

  render() {
    return (
        <div>
          <div className="row">
            <button type="button" className="btn-info btn-xs">My Blogs</button>
            <h3>Write,a new blog</h3>
          </div>
          <form className="row blog-newed">
            <span className="font-style">Blog Name</span>
            <span className="iconfont icon-biaoti"> </span>
            <input ref="blogName" type="text" className="form-control " placeholder="博客标题"/>
            <span className="font-style">Write Here</span>
            <span className="iconfont icon-write"> </span>
            <textarea ref="blogContent" className="form-control" rows="10" cols="10" placeholder="书写博客内容"/>
            <span className="font-style">Enter Some Tags</span>
            <span className="iconfont icon-biaoqian"> </span>
            <input ref="blogTag" type="text" className="form-control blog-tags" placeholder="博客标签"/>
            <button type="button" className="btn-submmit mt20 mb30  btn btn-info" onClick={this.handleClick.bind(this)}>
              <span className="iconfont icon-fabiao"> </span>
              Publish This Blog
            </button>
          </form>
        </div>
    );
  }
}
const mapStateToProps = (state)=> {
  return state;
};
const mapDispatchToProps = (dispatch)=> ({
  sendBlogMessage: (blogMessage)=> {
    dispatch(sendBlogContent(blogMessage));
  }
});
const BlogNewedPackage = connect(mapStateToProps, mapDispatchToProps)(BlogNewed);
export default BlogNewedPackage;