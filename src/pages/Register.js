import React, { Component } from 'react'
import API from '../api/API'
import Body from '../includes/Body'
import {Link} from 'react-router-dom'
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
// import { OldSocialLogin as SocialLogin } from 'react-social-login'
import SocialButton from '../includes/SocialButton'
import { store } from 'react-notifications-component';


export default class Register extends Component {

    handleSocialLogin = (user) => {
        // console.log(user._profile);

        API.post('/user/socialloginregister',user._profile)
        .then(response=>{
            console.log(response.data)
        })

    }

    handleSocialLoginFailure = (err) => {
        console.error(err)
    }
      

    handleSubmit = e => {
        e.preventDefault();
        // alert(123);

        store.addNotification({
            title: "Wonderful!",
            message: "teodosii@react-notifications-component",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          })
    }

    render() {
        return (
            <Body>
            
            <section id="content_main" className="clearfix mb-5 mt-5">
                <div className="container">
                    <div className="row main_content">
                    <div className="container col-md-4" style={{marginTop: '3rem', marginBottom: '6rem'}}>
                            <center>
                                <h1>Register</h1>
                            </center>
                            <form onSubmit={this.handleSubmit} method="post" id="commentform" className="comment-form">
                                
                                <div className="form-fields row">
                                    <span className="comment-form-author col-md-12 mt-3">
                                        <input name="name" type="text"  size={30} placeholder="Your Name" />
                                    </span>
                                    <span className="comment-form-author col-md-12 mt-3">
                                        <input name="email" type="text"  size={30} placeholder="Your Email" />
                                    </span>
                                    <span className="comment-form-email col-md-12 mt-3">
                                        <input name="password" type="text"  size={30} placeholder="Your Password" />
                                    </span>
                                </div>
                                <p className="form-submit">
                                    <input name="submit" type="submit" id="submit" className="submit btn-block" value="Register"/>
                                </p>
                            </form>
                            <div style={{paddingTop: '58px'}}>
                                <p>No account? <a href="" className="text-primary">Create one</a></p>
                            </div>
                            <div>
                            <center>
                                <h6 style={{ marginBottom: '9px'}}>OR</h6>
                            </center>
                            </div>
                            
                            <SocialButton
                                provider='facebook'
                                appId='471487504238960'
                                onLoginSuccess={this.handleSocialLogin}
                                onLoginFailure={this.handleSocialLoginFailure}
                                key={'facebook'}
                                >
                                <FacebookLoginButton />
                            </SocialButton>

                            <SocialButton
                                provider='google'
                                appId='611802830352-l7hoeefnong5kn8g2c60gdds8h3avs03.apps.googleusercontent.com'
                                onLoginSuccess={this.handleSocialLogin}
                                onLoginFailure={this.handleSocialLoginFailure}
                                key={'google'}
                                scope={'https://www.googleapis.com/auth/user.gender.read'}
                                >
                                <GoogleLoginButton />
                            </SocialButton>
                        </div>
                    </div>
                </div>
            </section>
        </Body>
        )
    }
}
