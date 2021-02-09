import React, { Component } from 'react'
import Body from '../includes/Body'
import $ from 'jquery'
import API from '../api/API'
import { store } from 'react-notifications-component';

export default class Forgotpassword extends Component {


    handleSubmit=e=>{
        e.preventDefault();

        var email = $('#email').val();

        API.get(`/user/forgotpassword/${email}`)
        .then(response=>{
            console.log(response.data)

            if(response.data.response==='true'){
                store.addNotification({
                    title: 'Success',
                    message: 'Please check your email inbox',
                    type: 'success',                     
                    container: 'top-right',                
                    animationIn: ["animated", "fadeIn"],    
                    animationOut: ["animated", "fadeOut"],   
                    dismiss: {
                      duration: 3000
                    }
                })
                this.props.history.push('/login')
            }else{
                store.addNotification({
                    title: 'Failed',
                    message: 'Please enter a registrated email',
                    type: 'danger',                         
                    container: 'top-right',                
                    animationIn: ["animated", "fadeIn"],     
                    animationOut: ["animated", "fadeOut"],   
                    dismiss: {
                      duration: 3000
                    }
                })
            }

        })

    }

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
                            <form onSubmit={this.handleSubmit} className="comment-form">
                                
                                <div className="form-fields row">
                                    <span className="comment-form-author col-md-12 mt-3">
                                        <input id="email" type="text"  placeholder="Your Email" required />
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
