/**
 * Created by yujuan on 17-1-30.
 * 功能：个人博客中心
 */
import React, {Component} from 'react';

class UserCenter extends Component {
  render() {
    return (
        <div className="row user-info blog-body">
          <div className="col-md-4">
            <img src="images/02.jpg">
          </div>
          <div className="col-md-offset-3 col-md-4">
            <button className="middle btn-info" value="写文章">
            </button>
          </div>
        </div>
  );

  }
}
export default UserCenter;

