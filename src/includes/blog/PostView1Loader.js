import React from 'react'
import Loader from 'react-loader-spinner'

export default function PostView1Loader() {
    return (
        <>
            
            <div className="mt-5 box jl_grid_layout1 blog_grid_post_style post-2957 post type-post status-publish format-standard has-post-thumbnail hentry category-inspiration tag-morning">
                <div className="mt-5 jl_grid_w">
                    <center>
                        <Loader
                        type="TailSpin"
                        color="black"
                        height={30}
                        width={30} />
                    </center>
                </div>
            </div> 
        </>
    )
}
