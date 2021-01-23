import React from 'react'
import Truncate from 'react-truncate';
import {Link} from 'react-router-dom'

export default function HomeCatView2(props) {
    var data = props.data;
    return (
        <div className="jl_mg_sm">
            <div className="jl_mg_sm_w">
            <div className="jl_f_img jl_radus_e"><Link exact to={data.url} ><img width={1000} height={650} src={process.env.REACT_APP_BACKENDURL+'/'+data.imagethumb} className="attachment-sprasa_feature_large size-sprasa_feature_large wp-post-image" alt="" loading="lazy" /></Link> </div>
            <div className="jl_mg_content">
                <h3 className="entry-title"><Link exact to={data.url}>{data.name}</Link></h3>
            </div>
            </div>
        </div>
    )
}
