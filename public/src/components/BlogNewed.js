/**
 * Created by yujuan on 17-2-5.
 */
import React, {Component} from 'react';
import UserCenter from "./UserCenter";
class BlogNewed extends Component {
  render() {
    return (
        <div>
          <UserCenter/>
          <div className="row">
            <button type="button" className="btn-info btn-xs">My Blogs</button>
            <h3>Write,a new blog</h3>
          </div>
          <form className="row blog-newed">
            <span className="font-style">Blog Name</span>
            <span className="iconfont icon-biaoti" > </span>
            <input type="text" className="form-control blog-name"/>
            <span className="font-style">Write Here</span>
            <span className="iconfont icon-write" > </span>
            <textarea className="form-control" rows="10" cols="10"/>
            <span className="font-style">Enter Some Tags</span>
            <span className="iconfont icon-biaoqian" > </span>
            <input type="text" className="form-control blog-tags"/>
            <input type="submit" value="Publish This Blog " className="btn-submmit mt20 mb30  btn btn-info "/>
          </form>
        </div>
    );
  }
}

export default BlogNewed;