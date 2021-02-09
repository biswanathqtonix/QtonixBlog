import React, { Component } from 'react'
import { connect } from 'react-redux'
import Body from '../../includes/Body'
import SidebarBlog from './SidebarBlog'
import API from '../../api/API'
import Loader from 'react-loader-spinner'
import Moment from 'react-moment';
import RelatedArticleView from '../../includes/blog/RelatedArticleView'
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import cookie from 'react-cookies'
import { DiscussionEmbed } from 'disqus-react';


export class BlogViewDetails extends Component {

    constructor(props){
        super(props)
        this.state={
            loading:true,
            data:[],
            relatedblogs:[]
        }
    }


    componentDidMount(){
        this.setState({
            loading:true
        })
        API.get(`/blog/viewbyurl/${this.props.match.params.blogurl}`)
        .then(response=>{
            this.setState({
                loading:false,
                data:response.data
            })

            API.get(`/blog/blogcategory-relatedarticle/${response.data.data.category}/2`)
            .then(response2=>{
                this.setState({
                    loading:false,
                    relatedblogs:response2.data.data
                })
               
            })

        })
    }

    componentDidUpdate(prevProps){
        
        if(prevProps.match.url !== this.props.match.url){
            // this.props.fetchCategoryBlog(this.props.match.params.category)
            // this.props.fetchAllBlogsCategory(this.props.match.params.category)
            // window.scrollTo(0, 0);


            this.setState({
                loading:true
            })

            API.get(`/blog/viewbyurl/${this.props.match.params.blogurl}`)
            .then(response=>{
                this.setState({
                    loading:false,
                    data:response.data
                })

                API.get(`/blog/blogcategory-relatedarticle/${response.data.data.category}/2`)
                .then(response2=>{
                    this.setState({
                        loading:false,
                        relatedblogs:response2.data.data
                    })
                
                })

            })

            
        }
    }


    // componentDidUpdate(){
    //     window.scrollTo(0, 0);
    // }

    render() {

        //GET LOGIN LOGOUT USER DATA
        const user = cookie.load('qbuserdata');

        return (
            <React.Fragment>
                <Body>
                
                    <div className="mobile_menu_overlay" />
                    <section id="content_main" className="clearfix jl_spost">
                        <div className="container">
                        <div className="row main_content">
                            <div className="col-md-8 loop-large-post" id="content">
                            <div className="widget_container content_page">

                            {this.state.loading===true
                                        ?
                                        <h1 className="text-center mt-5 mb-5"><Loader
                                                type="TailSpin"
                                                color="#007bff"
                                                height={100}
                                                width={100}
                                        /></h1>
                                        :
                                        <>
                                            {this.state.data.data !== null
                                            ?
                                            <div className="post-2970 post type-post status-publish format-gallery has-post-thumbnail hentry category-business tag-inspiration tag-morning tag-tip tag-tutorial post_format-post-format-gallery" id="post-2970">
                                                <div className="single_section_content box blog_large_post_style">
                                                    <div className="jl_single_style2">
                                                    <div className="single_post_entry_content single_bellow_left_align jl_top_single_title jl_top_title_feature">
                                                        <span className="meta-category-small single_meta_category"><a className="post-category-color-text" style={{background: '#eba845'}} href="#">{this.state.data.data.category}</a></span> 
                                                        <h1 className="single_post_title_main">{this.state.data.data.title}</h1>
                                                        <p className="post_subtitle_text">{this.state.data.data.description}</p>
                                                        <img src={process.env.REACT_APP_BACKENDURL+'/'+this.state.data.data.image} className="w-100 mt-3" alt=""/>
                                                        <span className="jl_post_meta"><span className="post-date"><i className="jli-pen" />J<Moment format="MMMM M, YYYY">{this.state.data.data.createdAt}</Moment></span><span className="meta-comment"><i className="jli-comments" /><a href="#respond">0 Comment</a></span></span>
                                                    </div>
                                                    </div>
                                                    <div className="post_content_w">
                                                        <div dangerouslySetInnerHTML={{__html: this.state.data.data.content}}></div>
                                                    </div>
                                                    

                                                    <div className="clearfix" />
                                                    
                                                    <div className="related-posts">
                                                    <h4>Related Articles</h4>
                                                    <div className="single_related_post">
                                                        
                                                    {this.state.relatedblogs.length>0
                                                    ?
                                                        <>
                                                        {this.state.relatedblogs.map((relabl)=>{
                                                            return(
                                                                <RelatedArticleView key={relabl._id} data={relabl} />
                                                            )
                                                        })}
                                                        </>
                                                    :
                                                    <h6>Loading...</h6>
                                                    } 
        
                                                    </div>
                                                    </div>
                                                    <div id="respond" className="comment-respond">

                                                    <div className="row">

                                                    <div className="col-md-12 mt-3">
                                                       <h6>
                                                        <img className="ucomment_img" src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png" alt="" />
                                                        <span className="ml-2 ucomment_head">John Doe <span className="ucomment_head_time">(2 days ago)</span> </span> <br/> <span className="ucomment_headsub">johndoe@gmail.com</span> </h6> 
                                                        <p className="ucomment_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eos neque voluptatibus numquam velit. Laudantium, et iure, eum, deleniti rerum soluta quaerat vitae repellat facilis sequi doloribus. Voluptatum, exercitationem recusandae.</p>
                                                    </div>
                                                    


                                                    {user===undefined
                                                    ?
                                                    <div className="col-md-12 mt-5">
                                                        <h5>You must be <span className="text-primary">logged in</span> to post a comment</h5>

                                                        <div className="row no-gutters">
                                                            <div className="col-md-6">
                                                                <GoogleLoginButton className="" onClick={() => alert("Hello")} />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <FacebookLoginButton className="" onClick={() => alert("Hello")} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="col-md-12 mt-2">
                                                        <h3 id="reply-title" className="comment-reply-title">Leave a Reply</h3>
                                                        <form action="http://jellywp.com/html/sprasa-preview/post-layout-1.html" method="post" id="commentform" className="comment-form">
                                                            {/* <p className="comment-notes"><span id="email-notes">Your email address will not be published.</span> Required fields are marked <span className="required">*</span></p> */}
                                                            <p className="comment-form-comment">
                                                                <textarea className="u-full-width" id="comment" name="comment" cols={45} rows={8} aria-required="true" placeholder="Comment" defaultValue={""} />
                                                            </p>
                                                            <div className="form-fields row">
                                                                <span className="comment-form-author col-md-4">
                                                                    <input id="author" name="author" type="text" placeholder="Fullname" /></span>
                                                                <span className="comment-form-email col-md-4">
                                                                    <input id="email" name="email" type="text" placeholder="Email Address" /></span>
                                                                <span className="comment-form-url col-md-4">
                                                                    <input id="url" name="url" type="text" placeholder="Web URL" /></span>
                                                            </div>
                                                            {/* <p className="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" defaultValue="yes" /><label htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label></p> */}
                                                            <p className="form-submit"><input name="submit" type="submit" id="submit" className="submit" defaultValue="Post Comment" /><input type="hidden" name="comment_post_ID" id="comment_post_ID" /></p>
                                                        </form>
                                                    </div>
                                                    }
                                                    

                                                    


                                                    


                                                    </div>


                                                    <DiscussionEmbed
                                                        shortname='example'
                                                        config={
                                                            {
                                                                url: 'https://qtonixblog.netlify.app/',
                                                                identifier: '12123',
                                                                title: 'Hello',
                                                                language: 'zh_TW' //e.g. for Traditional Chinese (Taiwan)	
                                                            }
                                                        }
                                                    />
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                            :

                                            <h1 className="text-center mt-5 mb-5">Not Found</h1>
                                        
                                            }

                                        </>
                                        }
                                

                                {/* <div class="post_content_w">
                                       <div class="post_sw">
                                          <div class="post_s">
                                             <div class="jl_single_share_wrapper jl_clear_at">
                                                <ul class="single_post_share_icon_post">
                                                   <li class="single_post_share_facebook">
                                                    <FacebookShareButton
                                                            url={process.env.REACT_APP_WEBSITEURL+this.props.match.url}>
                                                            <FacebookIcon logoFillColor="white" />
                                                        </FacebookShareButton>
                                                   </li>
                                                   <li class="single_post_share_facebook">
                                                    <LinkedinShareButton
                                                            url={process.env.REACT_APP_WEBSITEURL+this.props.match.url}>
                                                            <LinkedinIcon logoFillColor="white" />
                                                        </LinkedinShareButton>
                                                   </li>
                                                   <li class="single_post_share_facebook">
                                                    <PinterestShareButton
                                                            url={process.env.REACT_APP_WEBSITEURL+this.props.match.url}>
                                                            <PinterestIcon logoFillColor="white" />
                                                        </PinterestShareButton>
                                                   </li>
                                                   <li class="single_post_share_facebook">
                                                    <TwitterShareButton
                                                            url={process.env.REACT_APP_WEBSITEURL+this.props.match.url}>
                                                            <TwitterIcon logoFillColor="white" />
                                                        </TwitterShareButton>
                                                   </li>
                                                   <li class="single_post_share_facebook">
                                                    <WhatsappShareButton
                                                            url={process.env.REACT_APP_WEBSITEURL+this.props.match.url}>
                                                            <WhatsappIcon logoFillColor="white" />
                                                        </WhatsappShareButton>
                                                   </li>
                                                   <li class="single_post_share_facebook">
                                                    <EmailShareButton
                                                            url={process.env.REACT_APP_WEBSITEURL+this.props.match.url}>
                                                            <EmailIcon logoFillColor="white" />
                                                        </EmailShareButton>
                                                   </li>
                                                   <li class="single_post_share_facebook">
                                                    <InstapaperShareButton
                                                            url={process.env.REACT_APP_WEBSITEURL+this.props.match.url}>
                                                            <InstapaperIcon logoFillColor="white" />
                                                        </InstapaperShareButton>
                                                   </li>
                                                   


                                                </ul>
                                             </div>
                                              <span class="single-post-meta-wrapper jl_sfoot"><a href="#" class="jm-post-like" data-post_id="2970" title="Like"><i class="jli-love"></i><span>3</span></a><span class="view_options"><i class="jli-view-o"></i><span>5.5k</span></span></span>
                                          </div>
                                       </div>
                                       <div class="post_content jl_content">
                                        
                                        </div>
                            </div> */}

                                
                                




                                <div className="brack_space" />
                            </div>
                            </div>
                            
                            <div className="col-md-4" id="sidebar">
                            
                            <SidebarBlog />

                            </div>
                        </div>
                        </div>
                    </section>

                </Body>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogViewDetails)
