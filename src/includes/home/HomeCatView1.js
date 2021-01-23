import React from 'react'
import Truncate from 'react-truncate';
import {Link} from 'react-router-dom'

export default function HomeCatView1(props) {
    var data = props.data;
    return (
        <div className="jl_mg_main">
            <div className="jl_mg_main_w">
            <div className="jl_img_box jl_radus_e"><a ><img width={1000} height={650} src={process.env.REACT_APP_BACKENDURL+'/'+data.imagethumb} className="attachment-sprasa_feature_large size-sprasa_feature_large wp-post-image" alt="" loading="lazy" /></a> <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#4dcf8f'}} >{data.name}</a></span></div>
            <div className="text-box">
                <h3 className="entry-title"> <Link exact to={data.url} tabIndex={-1}>{data.name}</Link> </h3>
                <p><Truncate lines={3} ellipsis={<span>... <Link exact to={data.url}>Read more</Link></span>}>
                            {data.description}
                </Truncate></p>
            </div>
            </div>
        </div>
    )
}
