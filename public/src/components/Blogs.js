import React ,{Component} from 'react';
import {connect} from 'react-redux';
import BlogItem from './BlogItem';
class Blogs extends Component{
  render() {
    let blogMessage = this.props.blogMessage;
    return (
        <div className="container">
          <div className="row">
            {
                blogMessage.map((v,k)=>{
                  return <BlogItem key={k} id={v._id} blogName={v.blogName}
                  blogContent={v.blogContent} blogTag={v.blogTag} publishDate={v.publishDate}/>
                })
            }
          </div>
        </div>
    )
  }  

}
/* 返回 由reducer压缩后的 state,并转变（匹配）为props数据，则可以直接this.props.blogMessage */
const mapStateToProps = (state)=>{
  return state;
};
const BlogsPackage = connect(mapStateToProps)(Blogs);
export default BlogsPackage;
  
  
