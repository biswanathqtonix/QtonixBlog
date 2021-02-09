import React, { Component } from 'react'
import { connect } from 'react-redux'
import Body from '../includes/Body'
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import SocialButton from '../includes/SocialButton'
import SimpleReactValidator from 'simple-react-validator';
import API from '../api/API'
import { store } from 'react-notifications-component';
import {storeUserDetails} from '../actions'
import {Link} from 'react-router-dom'
import {Helmet} from "react-helmet";

// import { Then } from 'react-if';

export class Login extends Component {

    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
        this.validator = new SimpleReactValidator();
        this.handleTextChange=this.handleTextChange.bind(this);
    }
    

    handleSocialLogin = (user) => {
        
        var props = this.props;
        // console.log(props);

        API.post('/user/socialloginregister',user._profile)
        .then(response=>{
       

            var responsedata = response.data;

            console.log(responsedata.data)

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

                localStorage.removeItem('qbuserdata');
                localStorage.removeItem('qbuserlogin');
                localStorage.removeItem('qbuserid');
                localStorage.removeItem('qbuseremail');
                localStorage.removeItem('qbuserimage');
                localStorage.removeItem('qbuseremailverify');

            

                // localStorage.setItem('qbuserdata',JSON.stringify(response.data));
                localStorage.setItem('qbuserlogin',true);
                localStorage.setItem('qbuserid',responsedata.data._id);
                localStorage.setItem('qbuseremail',responsedata.data.email);
                localStorage.setItem('qbuserimage',responsedata.data.imagethumb);
                localStorage.setItem('qbuseremailverify',responsedata.data.email_verify);

                

                //STORE IN REDUX STATE
                props.storeUserDetails(response.data.data);

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


                localStorage.removeItem('qbuserdata');
                localStorage.removeItem('qbuserlogin');
                localStorage.removeItem('qbuserid');
                localStorage.removeItem('qbuseremail');
                localStorage.removeItem('qbuserimage');
                localStorage.removeItem('qbuseremailverify');

            

                // localStorage.setItem('qbuserdata',JSON.stringify(response.data));
                localStorage.setItem('qbuserlogin',true);
                localStorage.setItem('qbuserid',responsedata.data._id);
                localStorage.setItem('qbuseremail',responsedata.data.email);
                localStorage.setItem('qbuserimage',responsedata.data.imagethumb);
                localStorage.setItem('qbuseremailverify',responsedata.data.email_verify);


                //STORE IN REDUX STATE
                props.storeUserDetails(response.data.data);

                this.props.history.push('/myaccount');
            }
        })

    }

    handleSocialLoginFailure = (err) => {
        console.error(err)
    }





    handleTextChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        var props = this.props;

        if (this.validator.allValid()) {

            console.log(this.state);
            API.post('/user/login',this.state)
            .then(response=>{
             
                var tresponse = response.data;

                if(tresponse.response==='true'){

                    store.addNotification({
                        title: 'Success',
                        message: 'Welcome',
                        type: 'success',                         
                        container: 'top-right',                
                        animationIn: ["animated", "fadeIn"],     
                        animationOut: ["animated", "fadeOut"],   
                        dismiss: {
                          duration: 3000
                        }
                    })

                    localStorage.removeItem('qbuserdata');
                    localStorage.removeItem('qbuserlogin');
                    localStorage.removeItem('qbuserid');
                    localStorage.removeItem('qbuseremail');
                    localStorage.removeItem('qbuserimage');
                    localStorage.removeItem('qbuseremailverify');
    
                
    
                    // localStorage.setItem('qbuserdata',JSON.stringify(response.data));
                    localStorage.setItem('qbuserlogin',true);
                    localStorage.setItem('qbuserid',tresponse.data._id);
                    localStorage.setItem('qbuseremail',tresponse.data.email);
                    localStorage.setItem('qbuserimage',tresponse.data.imagethumb);
                    localStorage.setItem('qbuseremailverify',tresponse.data.email_verify);
    
    
                    //STORE IN REDUX STATE
                    props.storeUserDetails(response.data.data);
    
                    this.props.history.push('/myaccount');


                }else{
                    store.addNotification({
                        title: 'Failed',
                        message: 'Wrong credentials.',
                        type: 'warning',                         
                        container: 'top-right',                
                        animationIn: ["animated", "fadeIn"],     
                        animationOut: ["animated", "fadeOut"],   
                        dismiss: {
                          duration: 3000
                        }
                    })
                }
            })


        }else{
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    render() {
        return (
            <Body>
                <Helmet>
                <title>Login</title>
                </Helmet>
                <section id="content_main" className="clearfix mb-5 mt-5">
                    <div className="container">
                        <div className="row main_content">
                        <div className="container col-md-4" style={{marginTop: '4rem', marginBottom: '6rem'}}>
                                <center>
                                    <h1>Login</h1>
                                </center>
                                <form className="comment-form" onSubmit={this.handleSubmit}>
                                    
                                    <div className="form-fields row">
                                        <span className="comment-form-author col-md-12 mt-3">
                                            <input name="email" type="text" onChange={this.handleTextChange} placeholder="Your Email" />
                                            <p className="text-danger mdtext">{this.validator.message('email', this.state.email, 'required')}</p>

                                        </span>
                                        <span className="comment-form-email col-md-12 mt-3">
                                            <input name="password" type="password" onChange={this.handleTextChange} placeholder="Your Password" />
                                            <p className="text-danger mdtext">{this.validator.message('password', this.state.password, 'required')}</p>

                                        </span>
                                    </div>
                                    <p className="form-submit">
                                        <input name="submit" type="submit" id="submit" className="submit btn-block" value="Login"/>
                                    </p>
                                </form>
                                <div style={{paddingTop: '58px'}}>
                                    <p><Link exact to="/forgotpassword" className="text-primary">Forgot Password</Link> <Link exact to="/register" className="text-primary float-right">Create account</Link></p>
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
                                    appId='987418374317-3isq11mnn327tp9rk7bmhsebh4v5jhkm.apps.googleusercontent.com'
                                    // appId='611802830352-l7hoeefnong5kn8g2c60gdds8h3avs03.apps.googleusercontent.com'
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
                <br/><br/>
            </Body>
        )
    }
}

const mapStateToProps = (state) => ({
    
})


export default connect(mapStateToProps, {storeUserDetails})(Login)











// import React from 'react'
// import Body from '../includes/Body'
// import { FacebookLoginButton } from "react-social-login-buttons";
// import { GoogleLoginButton } from "react-social-login-buttons";
// import SimpleReactValidator from 'simple-react-validator';


// export default function Login() {


    
//     return (
//         <Body>
            
//             <section id="content_main" className="clearfix mb-5 mt-5">
//                 <div className="container">
//                     <div className="row main_content">
//                     <div className="container col-md-4" style={{marginTop: '4rem', marginBottom: '6rem'}}>
//                             <center>
//                                 <h1>Login</h1>
//                             </center>
//                             <form action="http://jellywp.com/html/sprasa-preview/post-layout-1.html" method="post" id="commentform" className="comment-form">
                                
//                                 <div className="form-fields row">
//                                     <span className="comment-form-author col-md-12 mt-3">
//                                         <input id="author" name="email" type="text"  size={30} placeholder="Your Email" />
//                                     </span>
//                                     <span className="comment-form-email col-md-12 mt-3">
//                                         <input id="email" name="password" type="text"  size={30} placeholder="Your Password" />
//                                     </span>
//                                 </div>
//                                 <p className="form-submit">
//                                     <input name="submit" type="submit" id="submit" className="submit btn-block" value="Login"/>
//                                 </p>
//                             </form>
//                             <div style={{paddingTop: '58px'}}>
//                                 <p><a href="" className="text-primary">Forgot Password</a> <a href="" className="text-primary float-right">Create account</a></p>
//                             </div>
//                             <div>
//                             <center>
//                                 <h6 style={{ marginBottom: '9px'}}>OR</h6>
//                             </center>
//                             </div>
                            

//                             <GoogleLoginButton onClick={() => alert("Hello")} />

//                             <FacebookLoginButton onClick={() => alert("Hello")} />
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         <br/><br/>
//         </Body>
//     )
// }
