/**
 * Created by yujuan on 17-2-11.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
class BlogItem extends Component {
  render() {
    /*获取博客相关信息的数据*/
    let {id, blogName, blogContent, blogTag, userName, publishDate} = this.props;
    return (
        <div>
          <Link to={"/blogDetail/"+id}>
            <h2>{blogName}</h2>
          </Link>
        </div>
    )
  }
}

export default BlogItem;
