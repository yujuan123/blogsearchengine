/**
 * Created by yujuan on 17-2-16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Blogs from './Blogs';
import {Link} from 'react-router';
import {loadUserBlogs} from '../actions/index';

class homePage extends Component {
  
  render() {
    this.props.loadBlogs();
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-2"><h2>WISH YOU</h2></div>
            <div className="col-md-offset-8 col-md-1">

              <ul className="list-unstyled">
                <li>
                  <Link to="/"><span className="text-info">首页></span></Link>
                </li>
                <li>
                  <Link to="/blogNewed"><span className="text-info">写文章></span></Link>
                </li>
                <li>
                  <Link to="/userCenter"><span className="text-info">个人中心></span></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row col-md-8">
            <h2 className="info-heading">We Create Cool Things For The Better Web.</h2>
            <p className="invitation">
              we will write blogs
              <span className="iconfont icon-write"> </span>
            </p>
          </div>
          <Blogs/>
        </div>
    );
  }
}
const mapStateToProps = (state)=> {
  return state;
};
const mapDispatchToProps = (dispatch)=>({
  loadBlogs: ()=> {
    dispatch(loadUserBlogs());
  }
});

const homePagePackage = connect(mapStateToProps, mapDispatchToProps)(homePage);
export default homePagePackage;

