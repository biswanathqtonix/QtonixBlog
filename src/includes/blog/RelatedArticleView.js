import React from 'react'
import Truncate from 'react-truncate';
import Moment from 'react-moment';
import {Link} from 'react-router-dom'

export default function RelatedArticleView(props) {
    console.log(props.data)
    var blog=props.data;
    return (
        <div className="jl_m_right jl_m_list jl_m_img">
            <div className="jl_m_right_w">
                <div className="jl_m_right_img jl_radus_e"><a href="#"><img width={500} height={350} src={process.env.REACT_APP_BACKENDURL+'/'+blog.imagethumb} className="attachment-sprasa_slider_grid_small size-sprasa_slider_grid_small wp-post-image" alt="" loading="lazy" /></a></div>
                <div className="jl_m_right_content">
                <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#eba845'}} href="#">{blog.category}</a></span> 
                <h2 className="entry-title"> <Link tabIndex={-1}  exact to={blog.totalurl}>
                        <Truncate lines={2} ellipsis={<span> ...</span>}>
                            {blog.title}
                        </Truncate></Link></h2>
                <span className="jl_post_meta"><span className="post-date"><i className="jli-pen" /><Moment format="MMMM M, YYYY">{blog.createdAt}</Moment></span></span>
                <p><Truncate lines={3} ellipsis={<span>... <Link exact to={blog.totalurl}>Read more</Link></span>}>
                            {blog.description}
                        </Truncate></p>
                </div>
            </div>
        </div>
    )
}
