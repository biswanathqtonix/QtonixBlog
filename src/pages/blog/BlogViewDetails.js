import React, { Component } from 'react'
import { connect } from 'react-redux'
import Body from '../../includes/Body'
import SidebarBlog from './SidebarBlog'

export class BlogViewDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Body>
                    <div className="mobile_menu_overlay" />
                    <section id="content_main" className="clearfix jl_spost">
                        <div className="container">
                        <div className="row main_content">
                            <div className="col-md-8 loop-large-post" id="content">
                            <div className="widget_container content_page">
                                {/* start post */}
                                <div className="post-2970 post type-post status-publish format-gallery has-post-thumbnail hentry category-business tag-inspiration tag-morning tag-tip tag-tutorial post_format-post-format-gallery" id="post-2970">
                                <div className="single_section_content box blog_large_post_style">
                                    <div className="jl_single_style2">
                                    <div className="single_post_entry_content single_bellow_left_align jl_top_single_title jl_top_title_feature">
                                        <span className="meta-category-small single_meta_category"><a className="post-category-color-text" style={{background: '#eba845'}} href="#">Business</a></span> 
                                        <h1 className="single_post_title_main"> It time Rescue restaurant food with these epic saving </h1>
                                        <p className="post_subtitle_text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient monte</p>
                                        <span className="jl_post_meta"><span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 24, 2019</span><span className="post-read-time"><i className="jli-watch-2" />2 Mins read</span><span className="meta-comment"><i className="jli-comments" /><a href="#respond">0 Comment</a></span></span>
                                    </div>
                                    </div>

                                    <div className="post_content_w">
                                        <div className="post_sw">
                                            <div className="post_s">
                                            <div className="jl_single_share_wrapper jl_clear_at">
                                                <ul className="single_post_share_icon_post">
                                                <li className="single_post_share_facebook"><a href="#" target="_blank"><i className="jli-facebook" /></a></li>
                                                <li className="single_post_share_twitter"><a href="#" target="_blank"><i className="jli-twitter" /></a></li>
                                                <li className="single_post_share_pinterest"><a href="#" target="_blank"><i className="jli-pinterest" /></a></li>
                                                <li className="single_post_share_linkedin"><a href="#" target="_blank"><i className="jli-linkedin" /></a></li>
                                                </ul>
                                            </div>
                                            <span className="single-post-meta-wrapper jl_sfoot"><a href="#" className="jm-post-like" data-post_id={2970} title="Like"><i className="jli-love" /><span>3</span></a><span className="view_options"><i className="jli-view-o" /><span>5.5k</span></span></span>
                                            </div>
                                        </div>
                                        <div className="post_content jl_content">
                                            
                                            {/* POST VIEW */}
                                            
                                            
                                        
                                        </div>
                                    </div>


                                    
                                    <div className="clearfix" />
                                    
                                    
                                    <div className="related-posts">
                                    <h4>Related Articles</h4>
                                    <div className="single_related_post">
                                        
                                        <div className="jl_m_right jl_m_list jl_m_img">
                                        <div className="jl_m_right_w">
                                            <div className="jl_m_right_img jl_radus_e"><a href="#"><img width={500} height={350} src="img/taylor-friehl-yqMPFPj-BWA-unsplash-500x350.jpg" className="attachment-sprasa_slider_grid_small size-sprasa_slider_grid_small wp-post-image" alt="" loading="lazy" /></a></div>
                                            <div className="jl_m_right_content">
                                            <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#eba845'}} href="#">Business</a></span> 
                                            <h2 className="entry-title"> <a href="#" tabIndex={-1}>Nice photo shooting with hand classic style</a></h2>
                                            <span className="jl_post_meta"><span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 24, 2019</span><span className="post-read-time"><i className="jli-watch-2" />2 Mins read</span></span>
                                            <p>Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc...</p>
                                            </div>
                                        </div>
                                        </div>
                                        

                                    </div>
                                    </div>
                                    <div id="respond" className="comment-respond">
                                    <h3 id="reply-title" className="comment-reply-title">Leave a Reply</h3>
                                    <form action="http://jellywp.com/html/sprasa-preview/post-layout-1.html" method="post" id="commentform" className="comment-form">
                                        <p className="comment-notes"><span id="email-notes">Your email address will not be published.</span> Required fields are marked <span className="required">*</span></p>
                                        <p className="comment-form-comment"><textarea className="u-full-width" id="comment" name="comment" cols={45} rows={8} aria-required="true" placeholder="Comment" defaultValue={""} /></p>
                                        <div className="form-fields row"><span className="comment-form-author col-md-4"><input id="author" name="author" type="text" defaultValue size={30} placeholder="Fullname" /></span><span className="comment-form-email col-md-4"><input id="email" name="email" type="text" defaultValue size={30} placeholder="Email Address" /></span><span className="comment-form-url col-md-4"><input id="url" name="url" type="text" defaultValue size={30} placeholder="Web URL" /></span></div>
                                        <p className="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" defaultValue="yes" /><label htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label></p>
                                        <p className="form-submit"><input name="submit" type="submit" id="submit" className="submit" defaultValue="Post Comment" /><input type="hidden" name="comment_post_ID" id="comment_post_ID" /></p>
                                    </form>
                                    </div>
                                    {/* #respond */}
                                </div>
                                </div>
                                {/* end post */}
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
