import React from 'react'
import {Link} from 'react-router-dom'
import Truncate from 'react-truncate';
import Moment from 'react-moment';


export default function PostView1(props) {
    var blog=props.data;
    return (
        <div className="box jl_grid_layout1 blog_grid_post_style post-2957 post type-post status-publish format-standard has-post-thumbnail hentry category-inspiration tag-morning">
            <div className="jl_grid_w">
                <div className="jl_img_box jl_radus_e">
                    <Link exact to={blog.totalurl}> 
                    <img width={400} height={270} src={process.env.REACT_APP_BACKENDURL+'/'+blog.imagethumb} className="attachment-sprasa_slider_grid_small size-sprasa_slider_grid_small wp-post-image" alt="" loading="lazy" />
                    </Link> 
                    <span className="jl_f_cat">
                        <Link exact to={blog.categoryurl} className="post-category-color-text" style={{background: '#91bd3a'}}>{blog.category}</Link>
                    </span>
                </div>
                    <div className="text-box">
                    <h3><Link tabIndex={-1}  exact to={blog.totalurl}>
                        <Truncate lines={2} ellipsis={<span> ...</span>}>
                            {blog.title}
                        </Truncate></Link></h3>
                    <span className="jl_post_meta">
                        <span className="post-date"><i className="jli-pen" /><Moment format="MMMM M, YYYY">{blog.createdAt}</Moment></span>
                    </span> 
                    <p>
                        <Truncate lines={3} ellipsis={<span>... <Link exact to={blog.totalurl}>Read more</Link></span>}>
                            {blog.description}
                        </Truncate>
                    </p>
                </div>
            </div>
        </div>
    )
}
