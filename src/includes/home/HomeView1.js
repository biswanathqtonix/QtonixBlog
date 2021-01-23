import React from 'react'
import Truncate from 'react-truncate';
import Moment from 'react-moment';
import {Link} from 'react-router-dom'

export default function HomeView1(props) {
    var data = props.data;
    return (
        <div className="jl_m_center blog-style-one blog-small-grid">
            <div className="jl_m_center_w jl_radus_e">
            <div className="jl_f_img_bg" style={{backgroundImage: 'url("'+process.env.REACT_APP_BACKENDURL+'/'+data.imagethumb+'")'}} />
  
            <div className="text-box">
                <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#eba845'}} >{data.category}</a></span>
                <h3> <Link exact to={data.totalurl}> <Truncate lines={2} ellipsis={<span> ...</span>}>
                            {data.title}
                        </Truncate> </Link> </h3>
                <span className="jl_post_meta">
                    <span className="post-date"><i className="jli-pen" /><Moment format="MMMM M, YYYY">{data.createdAt}</Moment></span>
                    
                </span>
            </div>
            </div>
        </div>
    )
}
