import React from 'react'
import Truncate from 'react-truncate';
import {Link} from 'react-router-dom'
import Moment from 'react-moment';


export default function HomeCatView3(props) {
    var data = props.data;
    return (
        <div className="jl-grid-cols">
        <div className="p-wraper post-2691">
            <div className="jl_grid_w">
            <div className="jl_img_box jl_radus_e"><a ><img width={500} height={350} src={process.env.REACT_APP_BACKENDURL+'/'+data.imagethumb} className="attachment-sprasa_slider_grid_small size-sprasa_slider_grid_small wp-post-image" alt="" loading="lazy" /></a> <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#379e63'}} >Techno</a></span></div>
            <div className="text-box">
                <h3><Link exact to={data.totalurl} ><Truncate lines={2} ellipsis={<span>...</span>}>
                            {data.title}
                </Truncate></Link></h3>
                <span className="jl_post_meta"> <span className="post-date"><i className="jli-pen" /><Moment format="MMMM M, YYYY">{data.createdAt}</Moment></span></span>
            </div>
            </div>
        </div>
        </div>
    )
}
