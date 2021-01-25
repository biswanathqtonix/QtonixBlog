import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Footer extends Component {
    render() {
        return (
            <>
              <footer id="footer-container" className="jl_footer_act enable_footer_columns_dark">
                        {/* <div className="footer-columns">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                <div id="sprasa_about_us_widget-2" className="widget jellywp_about_us_widget">
                                    <div className="widget_jl_wrapper about_widget_content">
                                    <div className="jellywp_about_us_widget_wrapper">
                                        <img className="footer_logo_about" src="img/logo_w.png" alt="" />
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo ligula eget dolor aenean massa cum sociis natoque penatibus et magnis cum aenean massa cum sociis natoque penatibus</p>
                                        <div className="social_icons_widget">
                                        <ul className="social-icons-list-widget icons_about_widget_display" />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                
                                </div>
                                <div className="col-md-4">
                                <div className="widget_jl_wrapper jl_clear_at">
                                    <div id="sprasa_category_image_widget_register-2" className="widget jellywp_cat_image">
                                    <div className="wrapper_category_image">
                                        <div className="category_image_wrapper_main">
                                        <div className="jl_cat_img_w">
                                            <div className="jl_cat_img_c">
                                            <a className="category_image_link" id="category_color_2"  />
                                            <div className="category_image_bg_image jl_f_img_bg" style={{backgroundColor: '#4dcf8f', backgroundImage: 'url("img/morning-brew-rWfR4uYBFtY-unsplash-120x120.jpg")'}} />
                                            <span className="jl_cm_overlay"><span className="jl_cm_name">Active</span><span className="jl_cm_count">11 Posts</span></span>
                                            </div>
                                        </div>
                                        <div className="jl_cat_img_w">
                                            <div className="jl_cat_img_c">
                                            <a className="category_image_link" id="category_color_3"  />
                                            <div className="category_image_bg_image jl_f_img_bg" style={{backgroundColor: '#eba845', backgroundImage: 'url("img/pexels-andrea-piacquadio-3808904-1-120x120.jpg")'}} />
                                            <span className="jl_cm_overlay"><span className="jl_cm_name">Business</span><span className="jl_cm_count">10 Posts</span></span>
                                            </div>
                                        </div>
                                        <div className="jl_cat_img_w">
                                            <div className="jl_cat_img_c">
                                            <a className="category_image_link" id="category_color_4"  />
                                            <div className="category_image_bg_image jl_f_img_bg" style={{backgroundColor: '#7ebdb4', backgroundImage: 'url("img/tianyi-ma-WiONHd_zYI4-unsplash-120x120.jpg")'}} />
                                            <span className="jl_cm_overlay"><span className="jl_cm_name">Crazy</span><span className="jl_cm_count">5 Posts</span></span>
                                            </div>
                                        </div>
                                        <div className="jl_cat_img_w">
                                            <div className="jl_cat_img_c">
                                            <a className="category_image_link" id="category_color_6"  />
                                            <div className="category_image_bg_image jl_f_img_bg" style={{backgroundColor: '#d63447', backgroundImage: 'url("img/pexels-anna-shvets-3905792-120x120.jpg")'}} />
                                            <span className="jl_cm_overlay"><span className="jl_cm_name">Health</span><span className="jl_cm_count">6 Posts</span></span>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="widget-title">
                                        <h2 className="jl_title_c">Newsletter</h2>
                                        
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div> */}
                        <div className="footer-bottom enable_footer_copyright_dark">
                            <div className="container">
                            <div className="row bottom_footer_menu_text">
                                <div className="col-md-12">
                                <div className="jl_ft_w">
                                    © Copyright 2020 Jellywp. All rights reserved powered by Jellywp
                                    <ul id="menu-footer-menu" className="menu-footer">
                                    <li className="menu-item menu-item-6"> <a title >About Us</a></li>
                                    <li className="menu-item menu-item-7"> <a title >Private policy</a></li>
                                    <li className="menu-item menu-item-8"> <a title >Forums</a></li>
                                    <li className="menu-item menu-item-9"> <a title >Community</a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </footer>
                        {/* End footer */}
                        <div id="go-top"> <a href="#go-top"><i className="jli-up-chevron" /></a></div>  
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
