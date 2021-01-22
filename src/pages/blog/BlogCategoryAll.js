import React, { Component } from 'react'
import { connect } from 'react-redux'
import Body from '../../includes/Body'
import PostView from '../../includes/blog/PostView'
import PostView1 from '../../includes/blog/PostView1'
import {fetchAllBlogsCategory,fetchCategoryBlog} from '../../actions'
import PostView1Loader from '../../includes/blog/PostView1Loader'
import SidebarBlog from './SidebarBlog'

export class BlogCategoryAll extends Component {

    componentDidMount(){
        this.props.fetchCategoryBlog(this.props.match.params.category)
        this.props.fetchAllBlogsCategory(this.props.match.params.category)
    }

    componentDidUpdate(prevProps){

        if(prevProps.match.url !== this.props.match.url){
            this.props.fetchCategoryBlog(this.props.match.params.category)
            this.props.fetchAllBlogsCategory(this.props.match.params.category)
        }
            
    }

    render() {
        return (
            <React.Fragment>
                <Body>
                <div className="jl_post_loop_wrapper" id="wrapper_masonry">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-8 grid-sidebar" id="content">
                            
                     
                            {/* MAIN BLOG CATEGORY DETAILS */}
                            <PostView data={this.props.categoryblog} />

                                    

                            <div className="jl_wrapper_cat">
                            {/* BLOG POSTS */}
                            {!this.props.blogscategory.data
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
                                        {this.props.blogscategory.data.map((blog)=>{
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
    categoryblog:state.blog.categoryblog,
    blogscategory:state.blog.blogscategory  
})


export default connect(mapStateToProps, {fetchAllBlogsCategory,fetchCategoryBlog})(BlogCategoryAll)
