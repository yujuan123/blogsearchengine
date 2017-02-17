/**
 * Created by yujuan on 17-2-11.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
class BlogItem extends Component {
  render() {
    /*获取博客相关信息的数据*/
    let {id, blogName, blogContent, blogTag, publishDate} = this.props;
    return (
        <div className="col-md-12 blog-item">
          <p className="">by    ,  {publishDate}</p>
          <Link to={'/blogDetail/'+id}>
            <h2 className="blog-name">{blogName}</h2>
          </Link>
          <p className="blog-content">{blogContent}</p>
        </div>
    )
  }
}

export default BlogItem;
