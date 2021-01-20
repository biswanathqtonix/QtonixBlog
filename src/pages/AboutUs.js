import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../includes/Navbar'
import Body from '../includes/Body'


export class AboutUs extends Component {

    

    render() {
        return (
            <React.Fragment>
                <Body>
                        <section id="content_main" className="clearfix">
                            <div className="container">
                                <div className="row main_content">
                                {/* begin content */}
                                <div className="col-md-12 page_error_404">
                                    <h1 className="big"> 404 </h1>
                                    <p className="description">OOOOOPS! The page you are looking for not exist</p>
                                    <a className="link_home404" href="#"> Back to Home </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs)
