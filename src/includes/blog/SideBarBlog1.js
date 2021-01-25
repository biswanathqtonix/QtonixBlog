import React from 'react'
import Truncate from 'react-truncate';
import Moment from 'react-moment';
import {Link} from 'react-router-dom'

export default function SideBarBlog1(props) {
    var data = props.data;
    return (
        <div className="jl_m_right jl_sm_list jl_ml jl_clear_at">
            <div className="jl_m_right_w">
            <div className="jl_m_right_img jl_radus_e"><a><img width={120} height={120} src={process.env.REACT_APP_BACKENDURL+'/'+data.imagesmall} className="attachment-sprasa_small_feature size-sprasa_small_feature wp-post-image" alt="" loading="lazy" /></a></div>
            <div className="jl_m_right_content">
                <h2 className="entry-title"> <Link exact to={data.totalurl}> <Truncate lines={2} ellipsis={<span> ...</span>}>
                            {data.title}
                        </Truncate> </Link></h2>
                <span className="jl_post_meta"><Moment format="MMMM M, YYYY">{data.createdAt}</Moment></span>
            </div>
            </div>
        </div>
    )
}
