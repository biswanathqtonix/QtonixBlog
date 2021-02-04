import React, { Component } from 'react'
import API from '../api/API'
import Body from '../includes/Body'
import {Link} from 'react-router-dom'
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import cookie from 'react-cookies'
import SocialButton from '../includes/SocialButton'
import { store } from 'react-notifications-component';
import SimpleReactValidator from 'simple-react-validator';


export default class Register extends Component {

    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            password:'',
        }
        this.validator = new SimpleReactValidator();
        this.handleTextChange=this.handleTextChange.bind(this);
    }

    handleTextChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSocialLogin = (user) => {
        

        API.post('/user/socialloginregister',user._profile)
        .then(response=>{
       

            var responsedata = response.data;

            if(responsedata.message === 'Login Success'){
                store.addNotification({
                    title: 'Success',
                    message: 'Login Success',
                    type: 'success',                     
                    container: 'top-right',                
                    animationIn: ["animated", "fadeIn"],    
                    animationOut: ["animated", "fadeOut"],   
                    dismiss: {
                      duration: 3000
                    }
                })

                cookie.remove('qbuserdata', { path: '/' })
                cookie.remove('qbuserlogin', { path: '/' })
    
                var expires = new Date();
                expires.setSeconds(21600);
                cookie.save('qbuserdata', response.data, { path: '/',expires });
                cookie.save('qbuserlogin','true', { path: '/',expires })

                this.props.history.push('/myaccount');
            }

            if(responsedata.message === 'Registration Success'){
                store.addNotification({
                    title: 'Success',
                    message: 'Registration Success',
                    type: 'success',                         
                    container: 'top-right',                
                    animationIn: ["animated", "fadeIn"],     
                    animationOut: ["animated", "fadeOut"],   
                    dismiss: {
                      duration: 3000
                    }
                })
                cookie.remove('qbuserdata', { path: '/' })
                cookie.remove('qbuserlogin', { path: '/' })
    
                var expires = new Date();
                expires.setSeconds(21600);
                cookie.save('qbuserdata', response.data, { path: '/',expires });
                cookie.save('qbuserlogin','true', { path: '/',expires })

                this.props.history.push('/myaccount');
            }
        })

    }

    handleSocialLoginFailure = (err) => {
        console.error(err)
    }
      

    handleSubmit = e => {
        e.preventDefault();
        
        
        if (this.validator.allValid()) {
            alert('You submitted the form and stuff!');
            
            API.post('/user/userregister',this.state)
            .then(response=>{
        
            console.log(response.data);

            this.props.history.push('/myaccount');

            })


        } else {
            this.validator.showMessages();
            this.forceUpdate();

            
        }


        
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
                                        <input name="name" type="text" placeholder="Your Name" value={this.state.name} onChange={this.handleTextChange} />
                                        <p className="text-danger mdtext">{this.validator.message('name', this.state.name, 'required')}</p>
                                    </span>
                                    <span className="comment-form-author col-md-12 mt-3">
                                        <input name="email" type="email" placeholder="Your Email" value={this.state.email} onChange={this.handleTextChange} />
                                        <p className="text-danger mdtext">{this.validator.message('email', this.state.email, 'required')}</p>

                                    </span>
                                    <span className="comment-form-email col-md-12 mt-3">
                                        <input name="password" type="password" placeholder="Your Password" value={this.state.password} onChange={this.handleTextChange} />
                                        <p className="text-danger mdtext">{this.validator.message('password', this.state.password, 'required')}</p>

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
