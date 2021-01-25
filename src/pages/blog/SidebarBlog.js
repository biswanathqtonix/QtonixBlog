import React, { Component } from 'react'
import { connect } from 'react-redux'
import SideBarBlog1 from '../../includes/blog/SideBarBlog1'
import Loader from 'react-loader-spinner'


export class SidebarBlog extends Component {
    render() {
        var getdata = this.props.homedata;
        if(getdata===null){
        }
        return (
            <>
            <div className="jl_sidebar_w">
                <div id="sprasa_widget_social_counter_c-2" className="widget jl-widget-social-counter">
                    <div className="widget-title">
                        <h2 className="jl_title_c">Stay Connected</h2>
                    </div>
                    <div className="jl_social_counter social_counter_wraper jl_count_style_2 social_counter_item>">
                        <div className="jlsocial-element jl-facebook jl_radus_e"><a target="_blank" href="https://facebook.com/envato" className="facebook" title="facebook" /> <span className="jlsocial-element-left"> <i className="jli-facebook" aria-hidden="true" /> <span className="num-count">228.8k</span></span> <span className="jlsocial-element-right">fans</span></div>
                        <div className="jlsocial-element jl-youtube jl_radus_e"><a target="_blank" href="https://www.youtube.com/user/envato" title="Youtube" /> <span className="jlsocial-element-left"> <i className="jli-youtube" aria-hidden="true" /> <span className="num-count">65.5k</span></span> <span className="jlsocial-element-right">subscribers</span></div>
                        <div className="jlsocial-element jl-vimeo jl_radus_e"><a target="_blank" href="https://vimeo.com/beeple" title="vimeo" /> <span className="jlsocial-element-left"> <i className="jli-vimeo" aria-hidden="true" /> <span className="num-count">240</span></span> <span className="jlsocial-element-right">subscribers</span></div>
                        <div className="jlsocial-element jl-pinterest jl_radus_e"><a target="_blank" href="https://pinterest.com/envato" className="pinterest" title="pinterest" /> <span className="jlsocial-element-left"> <i className="jli-pinterest" aria-hidden="true" /> <span className="num-count">9.87k</span></span> <span className="jlsocial-element-right">followers</span></div>
                    </div>
                </div>
                <div id="sprasa_recent_post_text_widget-9" className="widget post_list_widget">
                    <div className="widget_jl_wrapper">
                        <div className="ettitle">
                            <div className="widget-title">
                                {getdata===null
                                ?
                                <center className="mb-3">
                                    <Loader type="Oval" color="#00BFFF" height={30} width={30} />
                                </center>
                                :
                                <h2 className="jl_title_c">{getdata.blogcategory5random[0].name} Blogs</h2>
                                }
                            </div>
                        </div>
                        <div className="bt_post_widget">
                                        
                        {getdata===null
                            ?
                            <center className="mt-5 mb-5">
                                <Loader type="Oval" color="#00BFFF" height={30} width={30} />
                            </center>
                            :
                            <>
                                {getdata.blogcategory5random4getblog.map((blog)=>{
                                    return(
                                        <SideBarBlog1 data={blog} key={blog._id} />
                                    )
                                })}
                            </>
                        }
                                


                        </div>
                    </div>
                </div>
                <div id="sprasa_ads300x250_widget-2" className="widget jellywp_ads300x250_widget">
                    <div className="widget_jl_wrapper ads_widget_container">
                        <div className="widget-title">
                            <h2 className="jl_title_c">Advertisement</h2>
                        </div>
                        <div className="ads300x250-thumb jl_radus_e"><a href="#"><img src="/img/ads.png" alt="" /></a></div>
                    </div>
                </div>
                </div> 
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    homedata:state.homedatas
})


export default connect(mapStateToProps)(SidebarBlog)
