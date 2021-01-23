import React from 'react'
import Truncate from 'react-truncate';
import Moment from 'react-moment';
import {Link} from 'react-router-dom'

export default function HomeView2(props) {
    var data = props.data;
    return (
        <div className="jl_m_right">
            <div className="jl_m_right_w">
            <div className="jl_m_right_img jl_radus_e"><a ><img width={120} height={120} src={process.env.REACT_APP_BACKENDURL+'/'+data.imagesmall} alt="" loading="lazy" /></a></div>
            <div className="jl_m_right_content">
                {/* <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#91bd3a'}} >Inspiration</a></span> */}
                
                <h3 className="entry-title"><Link exact to={data.totalurl}><Truncate lines={2} ellipsis={<span> ...</span>}>
                            {data.title}
                        </Truncate></Link></h3>
                
                <span className="jl_post_meta"> <span className="post-date"><i className="jli-pen" /><Moment format="MMMM M, YYYY">{data.createdAt}</Moment></span></span>
                <p className="mt-2"><Truncate lines={2} ellipsis={<span>... <Link exact to={data.totalurl}>Read more</Link></span>}>
                            {data.description}
                        </Truncate></p>

            
            </div>
            </div>
        </div>
    )
}
