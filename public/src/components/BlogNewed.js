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
            <button type="button" className="btn-info btn-small">My Blogs</button>
            <h3>Write,a new blog</h3>
          </div>
        </div>
    );
  }
}

export default BlogNewed;