import React from 'react'

export default function PostView(props) {
    var data = props.data.data;
    return (
        !data
        ?
        <p>loading....</p>
        :
        <div className="jl_cat_mid_title">
            <h3 className="categories-title title">{data.name}</h3>
            <p>{data.description}</p>
        </div>
        
    )
}
