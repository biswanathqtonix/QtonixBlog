import React, { Component } from 'react'
import { connect } from 'react-redux'
import Body from '../../includes/Body'
import PostView1 from '../../includes/blog/PostView1'
import PostView1Loader from '../../includes/blog/PostView1Loader'
import {fetchAllBlogs} from '../../actions'
import SidebarBlog from './SidebarBlog'
import {Helmet} from "react-helmet";

export class BlogAll extends Component {

    componentDidMount(){
        this.props.fetchAllBlogs();
    }

    render() {
        var allblogs = this.props.allblogs;

        return (
            <React.Fragment>
                <Body>
                <Helmet>
                    <title>Blogs</title>
                </Helmet>
                <div className="jl_post_loop_wrapper" id="wrapper_masonry">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-8 grid-sidebar" id="content">
                            
                            
                            {/* <div className="jl_cat_mid_title">
                            <h3 className="categories-title title">Inspiration</h3>
                            <p>Etiam vitae dapibus rhoncus. Eget etiam aenean nisi montes felis pretium donec veni. Pede vidi condimentum et aenean hendrerit. Quis sem justo nisi varius tincidunt nec aliquam arcu tempus vel laoreet lorem.</p>
                            </div> */}



                            <div className="jl_wrapper_cat">
                                <div id="content_masonry" className="jl_cgrid pagination_infinite_style_cat ">
                                    
                                    {!allblogs
                                    ?
                                        <>
                                            <PostView1Loader />
                                            <PostView1Loader />
                                            <PostView1Loader />
                                            <PostView1Loader />
                                            <PostView1Loader />
                                            <PostView1Loader />
                                            <PostView1Loader />
                                            <PostView1Loader />
                                        </>
                                    :
                                    <>
                                        {allblogs.map((blog)=>{
                                            return(
                                                <>
                                                <PostView1 data={blog} />
                                                </>
                                            )
                                        })

                                    }
                                
                                    </>
                                        
                                    }

                                </div>
                            {/* <nav className="jellywp_pagination">
                                <ul className="page-numbers">
                                <li><span aria-current="page" className="page-numbers current">1</span> </li>
                                <li><a className="page-numbers" href="#">2</a> </li>
                                <li><a className="page-numbers" href="#">3</a> </li>
                                <li><span className="page-numbers dots">…</span> </li>
                                <li><a className="page-numbers" href="#">7</a> </li>
                                <li><a className="next page-numbers" href="#"><i className="jli-right-chevron" /></a> </li>
                                </ul>
                            </nav> */}
                            </div>
                        </div>
                        <div className="col-md-4" id="sidebar">
                            <SidebarBlog />
                        </div>
                        </div>
                    </div>
                </div>
                </Body>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    allblogs:state.blog.blogs.response
})


export default connect(mapStateToProps, {fetchAllBlogs})(BlogAll)
