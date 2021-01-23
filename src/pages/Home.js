import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContentLoader from "react-content-loader"
import Loader from 'react-loader-spinner'
import Body from '../includes/Body'
import HomeView1 from '../includes/home/HomeView1';
import HomeView2 from '../includes/home/HomeView2';
import HomeView3 from '../includes/home/HomeView3'
import HomeCatView1 from '../includes/home/HomeCatView1'
import HomeCatView2 from '../includes/home/HomeCatView2'
import HomeCatView3 from '../includes/home/HomeCatView3'


export class Home extends Component {

    render() {
        var getdata = this.props.homedata;
        if(getdata===null){
            console.log('null');
        }
        console.log(getdata);

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
                                    {/* MAIN */}

                                    {getdata===null
                                    ?
                                    <center className="mt-5 mb-5">
                                        <Loader type="Oval" color="#00BFFF" height={30} width={30} />
                                    </center>
                                    :
                                        <>
                                        <HomeView1 data={getdata.latest4blog[0]} />
                                        {/* OTHER */}
                                        <HomeView2 data={getdata.latest4blog[1]} />
                                        <HomeView2 data={getdata.latest4blog[2]} />
                                        <HomeView2 data={getdata.latest4blog[3]} />
                                        </>
                                    }
                                    
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

                                        {getdata===null
                                        ?
                                        <center className="mt-5 mb-5 w-100">
                                            <Loader type="Oval" color="#00BFFF" height={30} width={30} />
                                        </center>
                                        :
                                        <>
                                        {getdata.random6blog.map((rdata)=>{
                                            return(
                                                <>
                                                <HomeView3 key={rdata._id} data={rdata} />
                                                </>
                                            )
                                        })}
                                        </>
                                        }   

                        
                                    </div>
                                    {/* <div className="jl_lmore_wrap">
                                        <div className="jl_lmore_c"> <a href="#" className="jl-load-link"><span>load more</span></a><span className="jl-load-animation"><span /></span></div>
                                    </div> */}
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
                                    
                                    {getdata===null
                                        ?
                                        <center className="mt-5 mb-5 w-100">
                                            <Loader type="Oval" color="#00BFFF" height={30} width={30} />
                                        </center>
                                        :
                                        <>
                                            {/* CHECK CATEGORY AVAILABLE OR NOT */}
                                            {getdata.blogcategory5random[0]
                                            ?
                                            <HomeCatView1 data={getdata.blogcategory5random[0]}/>
                                            :
                                             <>Please Add One More Category</>   
                                            }

                                            {getdata.blogcategory5random[1] ? <HomeCatView2 data={getdata.blogcategory5random[1]} /> : <>Please Add One More Category</>}
                                            {getdata.blogcategory5random[2] ? <HomeCatView2 data={getdata.blogcategory5random[2]} /> : <>Please Add One More Category</>}
                                            {getdata.blogcategory5random[3] ? <HomeCatView2 data={getdata.blogcategory5random[3]} /> : <>Please Add One More Category</>}
                                            {getdata.blogcategory5random[4] ? <HomeCatView2 data={getdata.blogcategory5random[4]} /> : <>Please Add One More Category</>}
                                               
                                            
                                        </>
                                    }
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
                                        <h3 className="jl_title_c"><span>
                                            {getdata===null
                                            ?
                                            <span>Loading...</span>
                                            :
                                            <>
                                            {getdata.blogcategory5random[0].name}
                                            </>
                                            }
                                             </span></h3>
                                        <p>This is an optional subtitle for post section</p>
                                        </div>

                                    
                                        
                                        {getdata===null
                                        ?
                                        <center className="mt-5 mb-5 w-100">
                                            <Loader type="Oval" color="#00BFFF" height={30} width={30} />
                                            {/*  */}
                                        </center>
                                        :
                                        <>
                                        {getdata.blogcategory5random4getblog.map((bcb)=>{
                                            return(
                                                <HomeCatView3 key={bcb._id} data={bcb} />
                                            )
                                        })}
                                        </>
                                        }


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
    homedata:state.homedatas
})


export default connect(mapStateToProps)(Home)
