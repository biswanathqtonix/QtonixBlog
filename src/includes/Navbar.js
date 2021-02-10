import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchNavbarMenu,storeUserDetails} from '../actions'
import { withRouter } from "react-router-dom";


export class Navbar extends Component {

    componentDidMount(){

        this.props.fetchNavbarMenu();

        const script = document.createElement("script");
        script.src = "/js/jquery.js";
      
        script.async = true;
        document.body.appendChild(script);
    }

    handleLogout = e => {
        e.preventDefault();

                localStorage.removeItem('qbuserdata');
                localStorage.removeItem('qbuserlogin');
                localStorage.removeItem('qbuserid');
                localStorage.removeItem('qbuseremail');
                localStorage.removeItem('qbuserimage');
                localStorage.removeItem('qbuserimageemailverify');



        //REMOVE USER DETAILS FROM REDUX STATE
        this.props.storeUserDetails(null);

        // persistStore(this.props).purge();

        this.props.history.push('/login');
    }


    


    render() {
        var menus = this.props.menus;

        //GET LOGIN LOGOUT USER DATA
        var user = this.props.user;

        //****DONT DELETE THIS OTHERWISE LOGIN THROUGH SOCIAL MEDIA WILL NOT WORK AND WIL SHOW SDK ERROR****
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
                                    <li className="menu-item current-menu-item current_page_item"> <a>Home<span className="border-menu" /></a></li>
                                    <li className="menu-item menu-item-4278"> <a >About Us<span className="border-menu" /></a></li>
                                    <li className="menu-item menu-item-4279"> <a >special offer<span className="border-menu" /></a></li>
                                    <li className="menu-item menu-item-4275"> <a >Info!!<span className="border-menu" /></a></li>
                                    </ul>
                                </div>
                                <div className="jl_top_cus_social">
                                    <div className="menu_mobile_share_wrapper">
                                    <ul className="social_icon_header_top jl_socialcolor">

                                        {user===null
                                        ?
                                            <React.Fragment>
                                            <li> <Link  exact to="/login">Login</Link></li>
                                            <li> <Link exact to="/register">Register</Link></li>
                                            </React.Fragment>
                                        :
                                            <React.Fragment>
                                            <li> <Link exact to="/myaccount"> 

                                            {user.imagethumb === undefined
                                            ?
                                            <img src='https://www.centrik.in/wp-content/uploads/2017/02/user-image-.png' alt="" style={{height: '30px', width: '30px', borderRadius: '50px'}} /> 
                                            :
                                            <img src={user.imagethumb} alt="" style={{height: '30px', width: '30px', borderRadius: '50px'}} /> 
                                            }
                                            
                                             <span className="ml-1">My Account</span></Link></li>
                                            
                                            <li> <Link exact to="/register" onClick={this.handleLogout}>Logout</Link></li>
                                            </React.Fragment>
                                        }

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
                                    {/* begin logo */}<a className="logo_link"><img className="jl_logo_n" src="https://www.qtonix.com/logo.png" alt="sprasa" /><img className="jl_logo_w" src="https://www.qtonix.com/logo.png" alt="sprasa" /></a>{/* end logo */}
                                    </div>
                                </div>
                                <div className="search_header_menu jl_nav_mobile">
                                    <div className="menu_mobile_icons">
                                    <div className="jlm_w"><span className="jlma" /><span className="jlmb" /><span className="jlmc" /></div>
                                    </div>

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
                            
                            <center>
                            <img src="https://www.qtonix.com/logo.png" alt=""/>

                            </center>
                            
                            
                            <ul id="mobile_menu_slide" className="menu_moble_slide">

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

                            </ul>
                            
                            
                            <div id="sprasa_about_us_widget-3" className="widget jellywp_about_us_widget">

                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sequi perferendis omnis voluptate soluta, veniam quis dolor reprehenderit obcaecati exercitationem nobis, eius tenetur illo repellat totam dolorum consectetur. Voluptatum, quo?</p>


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
    menus:state.menu,
    user:state.userdetails
})

const NavbarWithRouter = withRouter(Navbar);

export default connect(mapStateToProps, {fetchNavbarMenu,storeUserDetails})(NavbarWithRouter)
