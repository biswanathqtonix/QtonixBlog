import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Footer extends Component {
    render() {
        return (
            <>
              <footer id="footer-container" className="jl_footer_act enable_footer_columns_dark">
                        
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
