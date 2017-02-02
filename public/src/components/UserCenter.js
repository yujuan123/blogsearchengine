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
            <img src="images/02.jpg"/>
          </div>
          <div className="col-md-offset-1 col-md-4">
            <ul>
              <li><h3><span className=" iconfont icon-yonghu"> </span>FanBingBing</h3></li>
              <li><h3><span className="iconfont  icon-iconfont08zhiwei"> </span>Actor</h3></li>
              <li>
                <h3>
                  <a href="#" >
                    <span className="iconfont icon-brush"> </span>
                    写文章
                  </a>
                </h3>
              </li>
            </ul>
          </div>
        </div>
    );

  }
}
export default UserCenter;

