/**
 * Created by yujuan on 17-1-30.
 * 功能：个人博客中心
 */
import React, {Component} from 'react';
/*import react-router中的Link*/
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Blogs from './Blogs';
import {loadUserBlogs} from '../actions/index';
class UserCenter extends Component {
  render() {
    this.props.loadUserBlogs();
    return (
        <div className="container">
          <div className="row user-info blog-body">
            <div className="col-md-3 ">
              <img src="images/userPhoto.jpg"/>
            </div>
            <div className=" col-md-9">
              <ul>
                <li><h3><span className=" iconfont icon-user-outline"> </span>FanBingBing</h3></li>
                <li><h3><span className="iconfont  icon-zhiwei"> </span>Actor</h3></li>
                <li>
                  <h3>
                    <Link to="/blogNewed">
                      <span className="iconfont icon-iconxiezuo01"> </span>
                      写文章
                    </Link>
                  </h3>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <Blogs/>
          </div>
        </div>
    );

  }
}
const mapStateToProps = (state)=>{
  return state;
};
const mapDispatchToProps = (dispatch)=>({
  loadUserBlogs:()=>{
    dispatch(loadUserBlogs());
  }
});
const UserCenterPackage = connect(mapStateToProps,mapDispatchToProps)(UserCenter);
export default UserCenterPackage;

