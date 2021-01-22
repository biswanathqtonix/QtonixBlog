import React, { Component } from 'react'
import { connect } from 'react-redux'
import Body from '../includes/Body'
import {fetchGetNoLatestBlog} from '../actions/index'

export class Home extends Component {

    componentDidMount(){
        this.props.fetchGetNoLatestBlog(4);
    }

    render() {
        return (
            <React.Fragment>
                <Body>
                                        
                    <div className="mobile_menu_overlay" />
                        <div className="jl_home_bw">
                        <section className="home_section1">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                <div className="jl_mright_wrapper jl_clear_at">
                                    <div className="jl_mix_post">
                                    <div className="jl_m_center blog-style-one blog-small-grid">
                                        <div className="jl_m_center_w jl_radus_e">
                                        <div className="jl_f_img_bg" style={{backgroundImage: 'url("img/pexels-daria-shevtsova-1071162-scaled-1000x0.jpg")'}} />
                                        <a href="#" className="jl_f_img_link" /> <span className="jl_post_type_icon"><i className="jli-gallery" /></span>
                                        <div className="text-box">
                                            <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#eba845'}} href="#">Business</a></span>
                                            <h3> <a href="#">It time Rescue restaurant food with these epic saving</a> </h3>
                                            <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 24, 2019</span><span className="post-read-time"><i className="jli-watch-2" />2 Mins read</span></span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="jl_m_right">
                                        <div className="jl_m_right_w">
                                        <div className="jl_m_right_img jl_radus_e"><a href="#"><img width={120} height={120} src="img/andre-maliik-v5Kd6MSmzoQ-unsplash-scaled-120x120.jpg" className="attachment-sprasa_small_feature size-sprasa_small_feature wp-post-image" alt="" loading="lazy" /></a></div>
                                        <div className="jl_m_right_content">
                                            <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#91bd3a'}} href="#">Inspiration</a></span>
                                            <h3 className="entry-title"><a href="#">It’s time to look at the best structures of our society</a></h3>
                                            <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 24, 2019</span></span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="jl_m_right">
                                        <div className="jl_m_right_w">
                                        <div className="jl_m_right_img jl_radus_e"><a href="#"><img width={120} height={120} src="img/dan-smedley-TBNzDilPfzo-unsplash-120x120.jpg" className="attachment-sprasa_small_feature size-sprasa_small_feature wp-post-image" alt="" loading="lazy" /></a></div>
                                        <div className="jl_m_right_content">
                                            <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#4dcf8f'}} href="#">Active</a></span>
                                            <h3 className="entry-title"><a href="#">12 effortless maxi dresses to wear all summer</a></h3>
                                            <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 24, 2019</span></span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="jl_m_right">
                                        <div className="jl_m_right_w">
                                        <div className="jl_m_right_img jl_radus_e"><a href="#"><img width={120} height={120} src="img/markus-spiske-exUbjEirAsY-unsplash-120x120.jpg" className="attachment-sprasa_small_feature size-sprasa_small_feature wp-post-image" alt="" loading="lazy" /></a></div>
                                        <div className="jl_m_right_content">
                                            <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#d66300'}} href="#">Science</a></span>
                                            <h3 className="entry-title"><a href="#">Rescue restaurant food with these epic waste saving</a></h3>
                                            <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 24, 2019</span></span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="jl_m_right">
                                        <div className="jl_m_right_w">
                                        <div className="jl_m_right_img jl_radus_e"><a href="#"><img width={120} height={120} src="img/adam-jaime-dmkmrNptMpw-unsplash-120x120.jpg" className="attachment-sprasa_small_feature size-sprasa_small_feature wp-post-image" alt="" loading="lazy" /></a></div>
                                        <div className="jl_m_right_content">
                                            <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#62ce5c'}} href="#">Sports</a></span>
                                            <h3 className="entry-title"><a href="#">How Covid-19 made us forget our morals on plastic</a></h3>
                                            <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 24, 2019</span></span>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </section>
                        <section className="home_section2">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                <div id="blockid_72be465" className="block-section jl-main-block" data-blockid="blockid_72be465" data-name="jl_mgrid" data-page_max={11} data-page_current={1} data-author="none" data-order="date_post" data-posts_per_page={6} data-offset={5}>
                                    <div className="jl_grid_wrap_f jl_clear_at g_3col">
                                    <div className="jl-roww content-inner jl-col3 jl-col-row">
                                        <div className="jl_sec_title">
                                        <h3 className="jl_title_c"><span>Editors Picks Post (Random 6 Blogs)</span></h3>
                                        <p>This is an optional subtitle for post section</p>
                                        </div>
                                        <div className="jl-grid-cols">
                                        <div className="p-wraper post-2959">
                                            <div className="jl_grid_w">
                                            <div className="jl_img_box jl_radus_e"><a href="#"> <span className="jl_post_type_icon"><i className="jli-gallery" /></span><img width={500} height={350} src="img/oskar-zhitnitsa-d7bPBiGq668-unsplash-500x350.jpg" className="attachment-sprasa_slider_grid_small size-sprasa_slider_grid_small wp-post-image" alt="" loading="lazy" /></a> <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#62ce5c'}} href="#">Sports</a></span></div>
                                            <div className="text-box">
                                                <h3><a href="#">Wedding guest dresses for every shape, style and budget</a></h3>
                                                <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 24, 2019</span><span className="post-read-time"><i className="jli-watch-2" />2 Mins read</span></span>
                                                <p>Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet....</p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="jl-grid-cols">
                                        <div className="p-wraper post-2957">
                                            <div className="jl_grid_w">
                                            <div className="jl_img_box jl_radus_e"><a href="#"><img width={500} height={350} src="img/pexels-daria-shevtsova-709789-scaled-500x350.jpg" className="attachment-sprasa_slider_grid_small size-sprasa_slider_grid_small wp-post-image" alt="" loading="lazy" /></a> <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#91bd3a'}} href="#">Inspiration</a></span></div>
                                            <div className="text-box">
                                                <h3><a href="#">This is how much people have made selling old clothes</a></h3>
                                                <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 24, 2019</span><span className="post-read-time"><i className="jli-watch-2" />2 Mins read</span></span>
                                                <p>Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet....</p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="jl-grid-cols">
                                        <div className="p-wraper post-2955">
                                            <div className="jl_grid_w">
                                            <div className="jl_img_box jl_radus_e"><a href="#"> <span className="jl_post_type_icon"><i className="jli-quote-2" /></span><img width={500} height={350} src="img/daniel-korpai-L8y01mTuDZg-unsplash-scaled-500x350.jpg" className="attachment-sprasa_slider_grid_small size-sprasa_slider_grid_small wp-post-image" alt="" loading="lazy" /></a> <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#4dcf8f'}} href="#">Active</a></span></div>
                                            <div className="text-box">
                                                <h3><a href="#">This is how the pandemic has changed our habits</a></h3>
                                                <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 24, 2019</span><span className="post-read-time"><i className="jli-watch-2" />2 Mins read</span></span>
                                                <p>Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet...</p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="jl-grid-cols">
                                        <div className="p-wraper post-2953">
                                            <div className="jl_grid_w">
                                            <div className="jl_img_box jl_radus_e"><a href="#"><img width={500} height={350} src="img/taylor-friehl-yqMPFPj-BWA-unsplash-500x350.jpg" className="attachment-sprasa_slider_grid_small size-sprasa_slider_grid_small wp-post-image" alt="" loading="lazy" /></a> <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#eba845'}} href="#">Business</a></span></div>
                                            <div className="text-box">
                                                <h3><a href="#">Nice photo shooting with hand classic style</a></h3>
                                                <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 24, 2019</span><span className="post-read-time"><i className="jli-watch-2" />2 Mins read</span></span>
                                                <p>Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet....</p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="jl-grid-cols">
                                        <div className="p-wraper post-2951">
                                            <div className="jl_grid_w">
                                            <div className="jl_img_box jl_radus_e"><a href="#"><img width={500} height={350} src="img/alex-block-O6PS-ts5C2A-unsplash-500x350.jpg" className="attachment-sprasa_slider_grid_small size-sprasa_slider_grid_small wp-post-image" alt="" loading="lazy" /></a> <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#eba845'}} href="#">Business</a></span></div>
                                            <div className="text-box">
                                                <h3><a href="#">It’s always fun time and smile in the summer</a></h3>
                                                <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 24, 2019</span><span className="post-read-time"><i className="jli-watch-2" />2 Mins read</span></span>
                                                <p>Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet....</p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="jl-grid-cols">
                                        <div className="p-wraper post-2949">
                                            <div className="jl_grid_w">
                                            <div className="jl_img_box jl_radus_e"><a href="#"> <span className="jl_post_type_icon"><i className="jli-gallery" /></span><img width={500} height={350} src="img/brooke-cagle-WHWYBmtn3_0-unsplash-500x350.jpg" className="attachment-sprasa_slider_grid_small size-sprasa_slider_grid_small wp-post-image" alt="" loading="lazy" /></a> <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#7ebdb4'}} href="#">Crazy</a></span></div>
                                            <div className="text-box">
                                                <h3><a href="#">Great time for enjoy your coffee with mountain view</a></h3>
                                                <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 24, 2019</span><span className="post-read-time"><i className="jli-watch-2" />2 Mins read</span></span>
                                                <p>Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet....</p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="jl_lmore_wrap">
                                        <div className="jl_lmore_c"> <a href="#" className="jl-load-link"><span>load more</span></a><span className="jl-load-animation"><span /></span></div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </section>
                        <section className="home_section3">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                <div className="jl_sec_title">
                                    <h3 className="jl_title_c">Random 5 Category</h3>
                                    <p>This is an optional subtitle for post section</p>
                                </div>
                                <div className="jl_mg_wrapper jl_clear_at">
                                    <div className="jl_mg_post jl_clear_at">
                                    
                                    <div className="jl_mg_main">
                                        <div className="jl_mg_main_w">
                                        <div className="jl_img_box jl_radus_e"><a href="#"><img width={1000} height={650} src="img/andre-ouellet-lGUJOzDBTJk-unsplash-1000x650.jpg" className="attachment-sprasa_feature_large size-sprasa_feature_large wp-post-image" alt="" loading="lazy" /></a> <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#4dcf8f'}} href="#">Active</a></span></div>
                                        <div className="text-box">
                                            <h3 className="entry-title"> <a href="#" tabIndex={-1}>Category 1</a> </h3>
                                            <p>Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum. Proin viverra orci...</p>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="jl_mg_sm">
                                        <div className="jl_mg_sm_w">
                                        <div className="jl_f_img jl_radus_e"><a href="#"><img width={1000} height={650} src="img/pexels-broken-villages-3991602-1000x650.jpg" className="attachment-sprasa_feature_large size-sprasa_feature_large wp-post-image" alt="" loading="lazy" /></a> <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#91bd3a'}} href="#">Inspiration</a></span></div>
                                        <div className="jl_mg_content">
                                            <h3 className="entry-title"><a href="#">Category 2</a></h3>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="jl_mg_sm">
                                        <div className="jl_mg_sm_w">
                                        <div className="jl_f_img jl_radus_e"><a href="#"><img width={1000} height={650} src="img/pexels-broken-villages-3991602-1000x650.jpg" className="attachment-sprasa_feature_large size-sprasa_feature_large wp-post-image" alt="" loading="lazy" /></a> <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#91bd3a'}} href="#">Inspiration</a></span></div>
                                        <div className="jl_mg_content">
                                            <h3 className="entry-title"><a href="#">Category 3</a></h3>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="jl_mg_sm">
                                        <div className="jl_mg_sm_w">
                                        <div className="jl_f_img jl_radus_e"><a href="#"><img width={1000} height={650} src="img/pexels-broken-villages-3991602-1000x650.jpg" className="attachment-sprasa_feature_large size-sprasa_feature_large wp-post-image" alt="" loading="lazy" /></a> <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#91bd3a'}} href="#">Inspiration</a></span></div>
                                        <div className="jl_mg_content">
                                            <h3 className="entry-title"><a href="#">Category 4</a></h3>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="jl_mg_sm">
                                        <div className="jl_mg_sm_w">
                                        <div className="jl_f_img jl_radus_e"><a href="#"><img width={1000} height={650} src="img/pexels-broken-villages-3991602-1000x650.jpg" className="attachment-sprasa_feature_large size-sprasa_feature_large wp-post-image" alt="" loading="lazy" /></a> <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#91bd3a'}} href="#">Inspiration</a></span></div>
                                        <div className="jl_mg_content">
                                            <h3 className="entry-title"><a href="#">Category 5</a></h3>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </section>
                        <section className="home_section4">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                <div id="blockid_3f9d058" className="block-section jl-main-block">
                                    <div className="jl_grid_wrap_f jl_clear_at g_4col">
                                    <div className="jl-roww content-inner jl-col3 jl-col-row">
                                        <div className="jl_sec_title">
                                        <h3 className="jl_title_c"><span>Health &amp; Fitness (Random Category Latest 4 Blog)</span></h3>
                                        <p>This is an optional subtitle for post section</p>
                                        </div>
                                        <div className="jl-grid-cols">
                                        <div className="p-wraper post-2691">
                                            <div className="jl_grid_w">
                                            <div className="jl_img_box jl_radus_e"><a href="#"><img width={500} height={350} src="img/pexels-toni-ph-1834391-scaled-500x350.jpg" className="attachment-sprasa_slider_grid_small size-sprasa_slider_grid_small wp-post-image" alt="" loading="lazy" /></a> <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#379e63'}} href="#">Techno</a></span></div>
                                            <div className="text-box">
                                                <h3><a href="#">Together we can make the world a better place</a></h3>
                                                <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 21, 2016</span><span className="post-read-time"><i className="jli-watch-2" />2 Mins read</span></span>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="jl-grid-cols">
                                        <div className="p-wraper post-2687">
                                            <div className="jl_grid_w">
                                            <div className="jl_img_box jl_radus_e"><a href="#"><img width={500} height={350} src="img/bradley-dunn-9SGGun3iIig-unsplash-500x350.jpg" className="attachment-sprasa_slider_grid_small size-sprasa_slider_grid_small wp-post-image" alt="" loading="lazy" /></a> <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#379e63'}} href="#">Techno</a></span></div>
                                            <div className="text-box">
                                                <h3><a href="#">Relaxing with nice view after enjoy with your food</a></h3>
                                                <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 21, 2016</span><span className="post-read-time"><i className="jli-watch-2" />3 Mins read</span></span>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="jl-grid-cols">
                                        <div className="p-wraper post-1615">
                                            <div className="jl_grid_w">
                                            <div className="jl_img_box jl_radus_e"><a href="#"><img width={500} height={350} src="img/chelsea-gates-cEj_1sfw3hA-unsplash-500x350.jpg" className="attachment-sprasa_slider_grid_small size-sprasa_slider_grid_small wp-post-image" alt="" loading="lazy" /></a> <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#eba845'}} href="#">Business</a></span></div>
                                            <div className="text-box">
                                                <h3><a href="#">Best Lighting For Outdoor Photo Shoot Style</a></h3>
                                                <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 26, 2014</span><span className="post-read-time"><i className="jli-watch-2" />2 Mins read</span></span>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="jl-grid-cols">
                                        <div className="p-wraper post-103">
                                            <div className="jl_grid_w">
                                            <div className="jl_img_box jl_radus_e"><a href="#"> <span className="jl_post_type_icon"><i className="jli-musical-note" /></span><img width={500} height={350} src="img/priscilla-du-preez-dlxLGIy-2VU-unsplash-500x350.jpg" className="attachment-sprasa_slider_grid_small size-sprasa_slider_grid_small wp-post-image" alt="" loading="lazy" /></a> <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#d63447'}} href="#">Health</a></span></div>
                                            <div className="text-box">
                                                <h3><a href="#">New skill with the height quality camera lens</a></h3>
                                                <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 26, 2014</span><span className="post-read-time"><i className="jli-watch-2" />2 Mins read</span></span>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </section>
                        <section className="home_section5">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                <div id="blockid_5ee403b" className="block-section jl-main-block">
                                    <div className="jl_slide_wrap_f jl_clear_at">
                                    <div className="jl-roww content-inner jl-col-none jl-col-row">
                                        <div className="jl_sec_title">
                                        <h3 className="jl_title_c"><span>Top Of The Week (Random 3 Blog of the week)</span></h3>
                                        <p>This is an optional subtitle for post section</p>
                                        </div>
                                        <div className="jl_ar_top">
                                        <div className="jl-w-slider jl_full_feature_w">
                                            <div className="jl-eb-slider jelly_loading_pro" data-arrows="true" data-play="true" data-effect="false" data-speed={500} data-autospeed={7000} data-loop="true" data-dots="true" data-swipe="true" data-items={1} data-xs-items={1} data-sm-items={1} data-md-items={1} data-lg-items={1} data-xl-items={1}>
                                            <div className="item-slide jl_radus_e">
                                                <div className="slide-inner">
                                                <div className="jl_full_feature">
                                                    <div className="jl_f_img_bg" style={{backgroundImage: 'url("img/pexels-andrea-piacquadio-3761523-1920x0.jpg")'}} />
                                                    <a href="#" className="jl_f_img_link" />
                                                    <div className="jl_f_postbox">
                                                    <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#4dcf8f'}} href="#">Active</a></span> 
                                                    <h3 className="jl_f_title"> <a href="#" tabIndex={-1}>Outdoor photo shooting with sexy and beautiful</a> </h3>
                                                    <span className="jl_post_meta"><span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 24, 2019</span><span className="post-read-time"><i className="jli-watch-2" />2 Mins read</span></span>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="item-slide jl_radus_e">
                                                <div className="slide-inner">
                                                <div className="jl_full_feature">
                                                    <div className="jl_f_img_bg" style={{backgroundImage: 'url("img/pexels-asya-cusima-3097297-1920x0.jpg")'}} />
                                                    <a href="#" className="jl_f_img_link" />
                                                    <div className="jl_f_postbox">
                                                    <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#d66300'}} href="#">Science</a></span> 
                                                    <h3 className="jl_f_title"> <a href="#" tabIndex={-1}>Hiding face is great way make you unique style</a> </h3>
                                                    <span className="jl_post_meta"><span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 24, 2019</span><span className="post-read-time"><i className="jli-watch-2" />2 Mins read</span></span>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="item-slide jl_radus_e">
                                                <div className="slide-inner">
                                                <div className="jl_full_feature">
                                                    <div className="jl_f_img_bg" style={{backgroundImage: 'url("img/noah-carter-_TJ22WxXJ8U-unsplash.jpg")'}} />
                                                    <a href="#" className="jl_f_img_link" />
                                                    <div className="jl_f_postbox">
                                                    <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#d66300'}} href="#">Science</a></span> 
                                                    <h3 className="jl_f_title"> <a href="#" tabIndex={-1}>Music will be more attractive if have guitar sound</a> </h3>
                                                    <span className="jl_post_meta"><span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 24, 2019</span><span className="post-read-time"><i className="jli-watch-2" />2 Mins read</span></span>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </section>
                        
                        
                        
                        <section className="home_section7">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                <div id="blockid_84d79c5" className="block-section jl-main-block">
                                    <div className="jl_grid_wrap_f jl_sf_grid jl_clear_at">
                                    <div className="jl-roww content-inner jl-col3 jl-col-row">
                                        <div className="jl_sec_title">
                                        <h3 className="jl_title_c"><span>Stories (Last 6 Blog)</span></h3>
                                        <p>This is an optional subtitle for post section</p>
                                        </div>
                                        <div className="jl-grid-cols">
                                        <div className="p-wraper post-1614">
                                            <div className="jl_m_right jl_sm_list jl_ml jl_clear_at">
                                            <div className="jl_m_right_w">
                                                <div className="jl_m_right_img jl_radus_e"><a href="#"><img width={450} height={450} src="img/klara-kulikova-f2d9xY93ym0-unsplash-450x450.jpg" className="attachment-sprasa_feature_small size-sprasa_feature_small wp-post-image" alt="" loading="lazy" /></a></div>
                                                <div className="jl_m_right_content">
                                                <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#eba845'}} href="#">Business</a></span>
                                                <h2 className="entry-title"><a href="#">It not easy learn to control photo color at first</a></h2>
                                                <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 26, 2014</span><span className="post-read-time"><i className="jli-watch-2" />3 Mins read</span></span>
                                                <p>Phasellus tellus tellus, imperdiet ut imperdiet Best WrodPress Theme for...</p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="jl-grid-cols">
                                        <div className="p-wraper post-1613">
                                            <div className="jl_m_right jl_sm_list jl_ml jl_clear_at">
                                            <div className="jl_m_right_w">
                                                <div className="jl_m_right_img jl_radus_e"><a href="#"><img width={450} height={450} src="img/pexels-ichad-windhiagiri-3993407-scaled-450x450.jpg" className="attachment-sprasa_feature_small size-sprasa_feature_small wp-post-image" alt="" loading="lazy" /></a></div>
                                                <div className="jl_m_right_content">
                                                <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#91bd3a'}} href="#">Inspiration</a></span>
                                                <h2 className="entry-title"><a href="#">Ready to go back home after the sunset view?</a></h2>
                                                <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 26, 2014</span><span className="post-read-time"><i className="jli-watch-2" />3 Mins read</span></span>
                                                <p>Phasellus tellus tellus, imperdiet ut imperdiet Best WrodPress Theme for...</p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="jl-grid-cols">
                                        <div className="p-wraper post-1612">
                                            <div className="jl_m_right jl_sm_list jl_ml jl_clear_at">
                                            <div className="jl_m_right_w">
                                                <div className="jl_m_right_img jl_radus_e"><a href="#"><img width={450} height={450} src="img/jeffrey-f-lin-XYESMxSp-yk-unsplash-450x450.jpg" className="attachment-sprasa_feature_small size-sprasa_feature_small wp-post-image" alt="" loading="lazy" /></a></div>
                                                <div className="jl_m_right_content">
                                                <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#91bd3a'}} href="#">Inspiration</a></span>
                                                <h2 className="entry-title"><a href="#">It not just a photo but it best inspiration</a></h2>
                                                <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 26, 2014</span><span className="post-read-time"><i className="jli-watch-2" />3 Mins read</span></span>
                                                <p>Phasellus tellus tellus, imperdiet ut imperdiet Best WrodPress Theme for...</p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="jl-grid-cols">
                                        <div className="p-wraper post-1611">
                                            <div className="jl_m_right jl_sm_list jl_ml jl_clear_at">
                                            <div className="jl_m_right_w">
                                                <div className="jl_m_right_img jl_radus_e"><a href="#"><img width={450} height={450} src="img/william-recinos-qtYhAQnIwSE-unsplash-450x450.jpg" className="attachment-sprasa_feature_small size-sprasa_feature_small wp-post-image" alt="" loading="lazy" /></a></div>
                                                <div className="jl_m_right_content">
                                                <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#eba845'}} href="#">Business</a></span>
                                                <h2 className="entry-title"><a href="#">Good day to take a photo with your favorite style</a></h2>
                                                <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 26, 2014</span><span className="post-read-time"><i className="jli-watch-2" />2 Mins read</span></span>
                                                <p>Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet...</p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="jl-grid-cols">
                                        <div className="p-wraper post-1610">
                                            <div className="jl_m_right jl_sm_list jl_ml jl_clear_at">
                                            <div className="jl_m_right_w">
                                                <div className="jl_m_right_img jl_radus_e"><a href="#"><img width={450} height={450} src="img/taylor-simpson-GxDo5JXcErw-unsplash-450x450.jpg" className="attachment-sprasa_feature_small size-sprasa_feature_small wp-post-image" alt="" loading="lazy" /></a></div>
                                                <div className="jl_m_right_content">
                                                <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#91bd3a'}} href="#">Inspiration</a></span>
                                                <h2 className="entry-title"><a href="#">halloween is coming soon what we going to do</a></h2>
                                                <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 26, 2014</span><span className="post-read-time"><i className="jli-watch-2" />2 Mins read</span></span>
                                                <p>Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet...</p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="jl-grid-cols">
                                        <div className="p-wraper post-1609">
                                            <div className="jl_m_right jl_sm_list jl_ml jl_clear_at">
                                            <div className="jl_m_right_w">
                                                <div className="jl_m_right_img jl_radus_e"><a href="#"><img width={450} height={450} src="img/obi-onyeador-xoXlVmsH6I-unsplash-450x450.jpg" className="attachment-sprasa_feature_small size-sprasa_feature_small wp-post-image" alt="" loading="lazy" /></a></div>
                                                <div className="jl_m_right_content">
                                                <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#7ebdb4'}} href="#">Crazy</a></span>
                                                <h2 className="entry-title"><a href="#">We need to connect WiFi for make it work Well</a></h2>
                                                <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 26, 2014</span><span className="post-read-time"><i className="jli-watch-2" />3 Mins read</span></span>
                                                <p>Phasellus tellus tellus, imperdiet ut imperdiet Best WrodPress Theme for...</p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </section>
                        </div>
                        {/* end content */}{/* Start footer */}
                        



                    </Body>

            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    
})


export default connect(mapStateToProps, {fetchGetNoLatestBlog})(Home)
