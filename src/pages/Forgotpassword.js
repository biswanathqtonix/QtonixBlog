import React, { Component } from 'react'
import Body from '../includes/Body'


export default class Forgotpassword extends Component {
    render() {
        return (
            <Body>
            
            <section id="content_main" className="clearfix mb-5 mt-5">
                <div className="container">
                    <div className="row main_content">
                    <div className="container col-md-4" style={{marginTop: '4rem', marginBottom: '18rem'}}>
                            <center>
                                <h1>Forgot Password</h1>
                            </center>
                            <form action="http://jellywp.com/html/sprasa-preview/post-layout-1.html" method="post" id="commentform" className="comment-form">
                                
                                <div className="form-fields row">
                                    <span className="comment-form-author col-md-12 mt-3">
                                        <input id="author" name="email" type="text"  size={30} placeholder="Your Email" />
                                    </span>
                                </div>
                                <p className="form-submit">
                                    <input name="submit" type="submit" id="submit" className="submit btn-block" value="Submit"/>
                                </p>
                            </form>
                            <div style={{paddingTop: '58px'}}>
                                <p>Go to <a href="" className="text-primary">Login</a> page</p>
                            </div>
                            <div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        <br/><br/>
        </Body>
        )
    }
}
