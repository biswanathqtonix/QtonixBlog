import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavLink,Link} from 'react-router-dom'
import {fetchNavbarMenu} from '../actions'
// import { Switch, Case, Default } from 'react-if';


export class Navbar extends Component {

    componentDidMount(){

        this.props.fetchNavbarMenu();

        const script = document.createElement("script");
        script.src = "/js/jquery.js";
      
        script.async = true;
        document.body.appendChild(script);
    }


    


    render() {

        var menus = this.props.menus;
        if(menus){

        }

        return (
            <>
               <header className="header-wraper jl_header_magazine_style two_header_top_style header_layout_style3_custom jl_cus_top_share">
                        <div className="header_top_bar_wrapper">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                <div className="menu-primary-container navigation_wrapper">
                                    <ul id="jl_top_menu" className="jl_main_menu">
                                    <li className="menu-item current-menu-item current_page_item"> <a href="index-2.html">Home<span className="border-menu" /></a></li>
                                    <li className="menu-item menu-item-4278"> <a >About Us<span className="border-menu" /></a></li>
                                    <li className="menu-item menu-item-4279"> <a >special offer<span className="border-menu" /></a></li>
                                    <li className="menu-item menu-item-4275"> <a >Info!!<span className="border-menu" /></a></li>
                                    </ul>
                                </div>
                                <div className="jl_top_cus_social">
                                    <div className="menu_mobile_share_wrapper">
                                    <span className="jl_hfollow">Share us</span>
                                    <ul className="social_icon_header_top jl_socialcolor">
                                        <li> <a className="facebook"  target="_blank"><i className="jli-facebook" /></a></li>
                                        <li> <a className="vk"  target="_blank"><i className="jli-vk" /></a></li>
                                        <li> <a className="telegram"  target="_blank"><i className="jli-telegram" /></a></li>
                                        <li> <a className="behance"  target="_blank"><i className="jli-behance" /></a></li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* Start Main menu */}
                        <div className="jl_blank_nav" />
                        <div id="menu_wrapper" className="menu_wrapper jl_menu_sticky jl_stick">
                            <div className="container">
                            <div className="row">
                                <div className="main_menu col-md-12">
                                <div className="logo_small_wrapper_table">
                                    <div className="logo_small_wrapper">
                                    {/* begin logo */}<a className="logo_link" href="index-2.html"><img className="jl_logo_n" src="/img/logo_n.png" alt="sprasa" /><img className="jl_logo_w" src="/img/logo_w.png" alt="sprasa" /></a>{/* end logo */}
                                    </div>
                                </div>
                                <div className="search_header_menu jl_nav_mobile">
                                    <div className="menu_mobile_icons">
                                    <div className="jlm_w"><span className="jlma" /><span className="jlmb" /><span className="jlmc" /></div>
                                    </div>
                                    {/* <div className="search_header_wrapper search_form_menu_personal_click"><i className="jli-search" /></div>
                                    <div className="jl_h_cart nav-cart is-hover">
                                    <a className="jl_l_cart cart-link"  title="view cart"> <span className="jl_i_cart"><i className="jli-bag" /><em className="cart-counter jl_count_cart">11</em></span></a>
                                    <div className="jl-nav-cart jl-hshow">
                                        <div className="jl-cart-wrap woocommerce">
                                        <div className="widget_shopping_cart_content">
                                            <ul className="woocommerce-mini-cart cart_list product_list_widget">
                                            <li className="woocommerce-mini-cart-item mini_cart_item"> <a  className="remove remove_from_cart_button"> × </a><a ><img width={380} height={380} src="img/herdian-indraputra-6kNVJ1fr3Ug-unsplash-380x380.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" loading="lazy" />thread</a> <span className="quantity"> 9 × <span className="woocommerce-Price-amount amount"> <bdi><span className="woocommerce-Price-currencySymbol">$</span>12.00</bdi></span></span></li>
                                            <li className="woocommerce-mini-cart-item mini_cart_item"> <a  className="remove remove_from_cart_button" aria-label="Remove this item"> × </a><a ><img width={380} height={380} src="img/irene-kredenets-maO-qIKLqi8-unsplash-1-380x380.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" loading="lazy" />cup</a> <span className="quantity"> 1 × <span className="woocommerce-Price-amount amount"> <bdi><span className="woocommerce-Price-currencySymbol">$</span>35.00</bdi></span></span></li>
                                            <li className="woocommerce-mini-cart-item mini_cart_item"> <a  className="remove remove_from_cart_button"> × </a><a ><img width={380} height={380} src="img/annie-spratt-fbAnIjhrOL4-unsplash-380x380.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" loading="lazy" />Flowerpot Plant</a> <span className="quantity"> 1 × <span className="woocommerce-Price-amount amount"> <bdi><span className="woocommerce-Price-currencySymbol">$</span>2.00</bdi></span></span></li>
                                            </ul>
                                            <p className="woocommerce-mini-cart__total total"> <strong>Subtotal:</strong><span className="woocommerce-Price-amount amount"> <bdi><span className="woocommerce-Price-currencySymbol">$</span>145.00</bdi></span></p>
                                            <p className="woocommerce-mini-cart__buttons buttons"><a  className="button wc-forward">View cart</a><a  className="button checkout wc-forward">Checkout</a></p>
                                        </div>
                                        </div>
                                    </div>
                                    </div> */}

                                    {this.props.children}

                                    

                                
                                </div>
                                <div className="menu-primary-container navigation_wrapper jl_cus_share_mnu">
                                    <ul id="mainmenu" className="jl_main_menu">
 

                                    {menus.map((menu)=>{
                                        return(
                                            menu.children !== undefined && menu.children.length > 0
                                            ?
                                            <li key={menu._id} className="menu-item menu-item-has-children">
                                                <Link exact to={menu.url}>{menu.text}<span className="border-menu" /></Link>
                                                <ul className="sub-menu">
                                                    {menu.children.map((menu1)=>{
                                                        return(
                                                            menu1.children !== null && menu1.children.length > 0
                                                            ?
                                                            <li key={menu1._id} className="menu-item menu-item-has-children">
                                                                {menu1.type !== 'custom'
                                                                ?
                                                                <Link exact to={menu1.url}>{menu1.text}<span className="border-menu" /></Link>
                                                                :
                                                                <a href={menu1.url} target="_blank">{menu1.text}<span className="border-menu" /></a>
                                                                }
                                                                <ul className="sub-menu">

                                                                {menu1.children.map((menu2)=>{
                                                                    return(
                                                                        menu2.children !== null && menu2.children.length > 0 
                                                                        ?
                                                                        <></>
                                                                        :
                                                                        <li key={menu2._id} className="menu-item">
                                                                            {menu2.type !== 'custom'
                                                                            ?
                                                                            <Link exact to={menu2.url}>{menu2.text}<span className="border-menu" /></Link>
                                                                            :
                                                                            <a href={menu2.url} target="_blank">{menu2.text}<span className="border-menu" /></a>
                                                                            }
                                                                        </li>
                                                                    )
                                                                })}
                                                                </ul>
                                                            </li>
                                                            :
                                                            <li key={menu1._id} className="menu-item">
                                                                {menu1.type !== 'custom'
                                                                ?
                                                                <Link exact to={menu1.url}>{menu1.text}<span className="border-menu" /></Link>
                                                                :
                                                                <a href={menu1.url} target="_blank">{menu1.text}<span className="border-menu" /></a>
                                                                }
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            :
                                            <li  key={menu._id} className="menu-item current-menu-item current_page_item">
                                                {menu.type !== 'custom'
                                                ?
                                                <Link exact to={menu.url}>{menu.text}<span className="border-menu" /></Link>
                                                :
                                                <a href={menu.url} target="_blank">{menu.text}<span className="border-menu" /></a>
                                                }
                                            </li>
                                        )
                                    })}





                                    {/* {menus.map((menu)=>{
                                        return(

                                        
                                            menu.children !== null && menu.children.length > 0
                                            ?

                                            <li key={menu._id} className="menu-item menu-item-has-children">
                                                <Link exact to={menu.url}>{menu.text}<span className="border-menu" /></Link>
                                                

                                                <ul className="sub-menu">

                                                    {menu.children.map((menu1)=>{
                                                        return(


                                                            menu1.children !== null && menu1.children.length > 0
                                                            ?
                                                            <li key={menu1._id} className="menu-item menu-item-has-children">
                                                                {menu1.type !== 'custom'
                                                                ?
                                                                <Link exact to={menu1.url}>{menu1.text}<span className="border-menu" /></Link>
                                                                :
                                                                <a href={menu1.url} target="_blank">{menu1.text}<span className="border-menu" /></a>
                                                                }
                                                                <ul className="sub-menu">

                                                                {menu1.children.map((menu2)=>{
                                                                    return(
                                                                        menu2.children !== null && menu2.children.length > 0 
                                                                        ?
                                                                        <></>
                                                                        :
                                                                        <li key={menu2._id} className="menu-item">
                                                                            {menu2.type !== 'custom'
                                                                            ?
                                                                            <Link exact to={menu2.url}>{menu2.text}<span className="border-menu" /></Link>
                                                                            :
                                                                            <a href={menu2.url} target="_blank">{menu2.text}<span className="border-menu" /></a>
                                                                            }
                                                                        </li>
                                                                    )
                                                                })}
                                                                    
                                                                    

                                                                </ul>
                                                            </li>
                                                            :
                                                            <li key={menu1._id} className="menu-item">
                                                                {menu1.type !== 'custom'
                                                                ?
                                                                <Link exact to={menu1.url}>{menu1.text}<span className="border-menu" /></Link>
                                                                :
                                                                <a href={menu1.url} target="_blank">{menu1.text}<span className="border-menu" /></a>
                                                                }
                                                            </li>


                                                        )
                                                    })}
                                                    

                                                </ul>
                                            </li>
                                            :
                                            <li  key={menu._id} className="menu-item current-menu-item current_page_item">
                                                {menu.type !== 'custom'
                                                ?
                                                <Link exact to={menu.url}>{menu.text}<span className="border-menu" /></Link>
                                                :
                                                <a href={menu.url} target="_blank">{menu.text}<span className="border-menu" /></a>
                                                }
                                                
                                            </li>

                                            
                                            
                                            
                                        )
                                    })} */}


                                    


                                    {/*<li className="menu-item"> <a href="inspiration.html">Inspiration<span className="border-menu" /></a></li>
                                    <li className="menu-item"> <a href="category.html">Active<span className="border-menu" /></a></li>
                                    <li className="menupost">
                                        <a href="business.html"> Business<span className="border-menu" /> <span className="jl_menu_lb" style={{background: '#f74539 !important'}}><span className="jl_lb_ar" style={{borderTop: '3px solid #f74539 !important'}} />Hot!</span> </a>
                                        <ul className="sub-menu menu_post_feature">
                                        <li>
                                            <div id="sprasa_recent_large_widgets-2" className="widget main_post_style">
                                            <h3 className="widget-title"><span>Recent Posts</span></h3>
                                            <div className="jl_grid_overlay jl_w_menu jl_clear_at">
                                                <div className="jl_grid_overlay_col">
                                                <div className="jl_grid_verlay_wrap jl_radus_e">
                                                    <div className="jl_f_img_bg" style={{backgroundImage: 'url("img/pexels-luis-quintero-3731255-scaled-500x350.jpg")'}} />
                                                    <a  className="jl_f_img_link" /> <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#91bd3a'}} >Inspiration</a></span>
                                                    <div className="jl_f_postbox">
                                                    <h3 className="jl_f_title"> <a >You can make your art with canyon color</a> </h3>
                                                    <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a  title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 23, 2016</span><span className="post-read-time"><i className="jli-watch-2" />2 Mins read</span></span>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="jl_grid_overlay_col">
                                                <div className="jl_grid_verlay_wrap jl_radus_e">
                                                    <div className="jl_f_img_bg" style={{backgroundImage: 'url("img/pexels-matt-hardy-2602545-scaled-500x350.jpg")'}} />
                                                    <a  className="jl_f_img_link" /> <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#91bd3a'}} >Inspiration</a></span>
                                                    <div className="jl_f_postbox">
                                                    <h3 className="jl_f_title"> <a >A comprehensive guide to the best summer dresses</a> </h3>
                                                    <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a  title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 23, 2016</span><span className="post-read-time"><i className="jli-watch-2" />2 Mins read</span></span>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="jl_grid_overlay_col">
                                                <div className="jl_grid_verlay_wrap jl_radus_e">
                                                    <div className="jl_f_img_bg" style={{backgroundImage: 'url("img/paige-muller-q_iJJGDATYQ-unsplash-500x350.jpg")'}} />
                                                    <a  className="jl_f_img_link" /> <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#91bd3a'}} >Inspiration</a></span>
                                                    <div className="jl_f_postbox">
                                                    <h3 className="jl_f_title"> <a >It feel like win 1 million dollar when code no error</a> </h3>
                                                    <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a  title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 23, 2016</span><span className="post-read-time"><i className="jli-watch-2" />2 Mins read</span></span>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="jl_grid_overlay_col">
                                                <div className="jl_grid_verlay_wrap jl_radus_e">
                                                    <div className="jl_f_img_bg" style={{backgroundImage: 'url("img/taylor-friehl-VwzvLjsiPb4-unsplash-500x360.jpg")'}} />
                                                    <a  className="jl_f_img_link" /> <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#d63447'}} >Health</a></span>
                                                    <div className="jl_f_postbox">
                                                    <h3 className="jl_f_title"> <a >Creative photography ideas from smart devices</a> </h3>
                                                    <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a  title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 23, 2016</span><span className="post-read-time"><i className="jli-watch-2" />2 Mins read</span></span>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children">
                                        <a href="shop.html"> Shop<span className="border-menu" /> <span className="jl_menu_lb" style={{background: '#ffe500 !important', color: '#000000 !important'}}><span className="jl_lb_ar" style={{borderTop: '3px solid #ffe500 !important'}} />Now</span> </a>
                                        <ul className="sub-menu">
                                        <li className="menu-item"> <a href="cart.html">Cart<span className="border-menu" /></a></li>
                                        <li className="menu-item"> <a href="my-account.html">My Account<span className="border-menu" /></a></li>
                                        </ul>
                                    </li> */}
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </header>


                        <div id="content_nav" className="jl_mobile_nav_wrapper">
                        <div id="nav" className="jl_mobile_nav_inner">
                            <div className="menu_mobile_icons mobile_close_icons closed_menu"> <span className="jl_close_wapper"><span className="jl_close_1" /><span className="jl_close_2" /></span></div>
                            <ul id="mobile_menu_slide" className="menu_moble_slide">
                            {/* <li className="menu-item current-menu-item current_page_item"> <a href="index-2.html">Home<span className="border-menu" /></a></li> */}
                            
                            <li className="menu-item current-menu-item current_page_item"> <Link exact to="/">Home<span className="border-menu" /></Link></li>
                            <li className="menu-item current-menu-item current_page_item"> <Link exact to="/aboutus">About<span className="border-menu" /></Link></li>
                            <li className="menu-item current-menu-item current_page_item"> <Link exact to="/blogs">Blogs<span className="border-menu" /></Link></li>
                                    
                            {/* <li className="menu-item menu-item-has-children">
                                <a >Features<span className="border-menu" /></a>
                                <ul className="sub-menu">
                                <li className="menu-item menu-item-has-children">
                                    <a href="post-layout-1.html">Post Layout<span className="border-menu" /></a>
                                    <ul className="sub-menu">
                                    <li className="menu-item"> <a href="post-layout-1.html">Post Layout 1<span className="border-menu" /></a></li>
                                    <li className="menu-item"> <a href="post-layout-2.html">Post Layout 2<span className="border-menu" /></a></li>
                                    <li className="menu-item"> <a href="post-layout-3.html">Post Layout 3<span className="border-menu" /></a></li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-has-children">
                                    <a href="post-format-standard.html">Post Format<span className="border-menu" /></a>
                                    <ul className="sub-menu">
                                    <li className="menu-item"> <a href="post-format-standard.html">Post format standard<span className="border-menu" /></a></li>
                                    <li className="menu-item"> <a href="post-format-gallery.html">Post format gallery<span className="border-menu" /></a></li>
                                    <li className="menu-item"> <a href="post-format-quote.html">Post Format Quote<span className="border-menu" /></a></li>
                                    <li className="menu-item"> <a href="post-format-video.html">Post format video<span className="border-menu" /></a></li>
                                    <li className="menu-item"> <a href="post-format-audio.html">Post format audio<span className="border-menu" /></a></li>
                                    </ul>
                                </li>
                                <li className="menu-item"> <a href="author.html">Author Page<span className="border-menu" /></a></li>
                                <li className="menu-item"> <a href="category.html">Category Page<span className="border-menu" /></a></li>
                                <li className="menu-item"> <a href="page-404.html">Page 404<span className="border-menu" /></a></li>
                                </ul>
                            </li>
                            <li className="menu-item"> <a href="inspiration.html">Inspiration<span className="border-menu" /></a></li>
                            <li className="menu-item"> <a href="category.html">Active<span className="border-menu" /></a></li>
                            <li className="menu-item"> <a href="business.html">Business<span className="border-menu" /></a></li>
                            <li className="menu-item menu-item-has-children">
                                <a href="shop.html">Shop<span className="border-menu" /></a>
                                <ul className="sub-menu">
                                <li className="menu-item"> <a href="cart.html">Cart<span className="border-menu" /></a></li>
                                <li className="menu-item"> <a href="my-account.html">My Account<span className="border-menu" /></a></li>
                                </ul>
                            </li> */}
                            </ul>
                            <div id="sprasa_recent_post_text_widget-11" className="widget post_list_widget">
                            <div className="widget_jl_wrapper">
                                <div className="ettitle">
                                <div className="widget-title">
                                    <h2 className="jl_title_c">Recent Posts</h2>
                                </div>
                                </div>
                                <div className="bt_post_widget">
                                <div className="jl_m_right jl_sm_list jl_ml jl_clear_at">
                                    <div className="jl_m_right_w">
                                    <div className="jl_m_right_img jl_radus_e"><a ><img width={120} height={120} src="img/pexels-ichad-windhiagiri-3993407-scaled-120x120.jpg" className="attachment-sprasa_small_feature size-sprasa_small_feature wp-post-image" alt="" loading="lazy" /></a></div>
                                    <div className="jl_m_right_content">
                                        <h2 className="entry-title"><a  tabIndex={-1}>Best inspire dark photo in the winter season</a></h2>
                                        <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a  title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 23, 2016</span></span>
                                    </div>
                                    </div>
                                </div>
                                <div className="jl_m_right jl_sm_list jl_ml jl_clear_at">
                                    <div className="jl_m_right_w">
                                    <div className="jl_m_right_img jl_radus_e"><a ><img width={120} height={120} src="img/ben-o-sullivan-GNp7ng0lR-8-unsplash-scaled-120x120.jpg" className="attachment-sprasa_small_feature size-sprasa_small_feature wp-post-image" alt="" loading="lazy" /></a></div>
                                    <div className="jl_m_right_content">
                                        <h2 className="entry-title"><a  tabIndex={-1}>Your job will be perfect if you concentrate</a></h2>
                                        <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a  title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 23, 2016</span></span>
                                    </div>
                                    </div>
                                </div>
                                <div className="jl_m_right jl_sm_list jl_ml jl_clear_at">
                                    <div className="jl_m_right_w">
                                    <div className="jl_m_right_img jl_radus_e"><a ><img width={120} height={120} src="img/pexels-unviajesinmaleta-3404200-120x120.jpg" className="attachment-sprasa_small_feature size-sprasa_small_feature wp-post-image" alt="" loading="lazy" /></a></div>
                                    <div className="jl_m_right_content">
                                        <h2 className="entry-title"><a  tabIndex={-1}>Enjoy the best time with a special person</a></h2>
                                        <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a  title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 23, 2016</span></span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div id="sprasa_about_us_widget-3" className="widget jellywp_about_us_widget">
                            <div className="widget_jl_wrapper about_widget_content">
                                <div className="jellywp_about_us_widget_wrapper">
                                <div className="social_icons_widget">
                                    <ul className="social-icons-list-widget icons_about_widget_display">
                                    <li> <a  className="facebook" target="_blank"><i className="jli-facebook" /></a></li>
                                    <li> <a  className="behance" target="_blank"><i className="jli-behance" /></a></li>
                                    <li> <a  className="vimeo" target="_blank"><i className="jli-vimeo" /></a></li>
                                    <li> <a  className="youtube" target="_blank"><i className="jli-youtube" /></a></li>
                                    <li> <a  className="instagram" target="_blank"><i className="jli-instagram" /></a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="search_form_menu_personal">
                        <div className="menu_mobile_large_close"> <span className="jl_close_wapper search_form_menu_personal_click"><span className="jl_close_1" /><span className="jl_close_2" /></span></div>
                        <form method="get" className="searchform_theme" action="#"><input type="text" placeholder="Search..." defaultValue name="s" className="search_btn" /><button type="submit" className="button"><i className="jli-search" /></button></form>
                </div> 
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    menus:state.menu
})


export default connect(mapStateToProps, {fetchNavbarMenu})(Navbar)
