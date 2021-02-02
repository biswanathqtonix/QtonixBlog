import React from 'react'
import Body from '../includes/Body'
import {Link} from 'react-router-dom'
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";

export default function Login() {
    return (
        <Body>
            
            <section id="content_main" className="clearfix mb-5 mt-5">
                <div className="container">
                    <div className="row main_content">
                    <div className="container col-md-4" style={{marginTop: '4rem', marginBottom: '6rem'}}>
                            <center>
                                <h1>Login</h1>
                            </center>
                            <form action="http://jellywp.com/html/sprasa-preview/post-layout-1.html" method="post" id="commentform" className="comment-form">
                                
                                <div className="form-fields row">
                                    <span className="comment-form-author col-md-12 mt-3">
                                        <input id="author" name="email" type="text"  size={30} placeholder="Your Email" />
                                    </span>
                                    <span className="comment-form-email col-md-12 mt-3">
                                        <input id="email" name="password" type="text"  size={30} placeholder="Your Password" />
                                    </span>
                                </div>
                                <p className="form-submit">
                                    <input name="submit" type="submit" id="submit" className="submit btn-block" value="Login"/>
                                </p>
                            </form>
                            <div style={{paddingTop: '58px'}}>
                                <p><a href="" className="text-primary">Forgot Password</a> <a href="" className="text-primary float-right">Create account</a></p>
                            </div>
                            <div>
                            <center>
                                <h6 style={{ marginBottom: '9px'}}>OR</h6>
                            </center>
                            </div>
                            

                            <GoogleLoginButton onClick={() => alert("Hello")} />

                            <FacebookLoginButton onClick={() => alert("Hello")} />
                        </div>
                    </div>
                </div>
            </section>
        <br/><br/>
        </Body>
    )
}
