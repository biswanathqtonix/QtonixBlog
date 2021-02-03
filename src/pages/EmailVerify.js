import React, { Component } from 'react'
import Body from '../includes/Body'


export default class EmailVerify extends Component {
    render() {
        return (
            <Body>
            <section id="content_main" className="clearfix mb-5 mt-5">
                <div className="container">
                    <div className="row main_content">
                    <div className="container col-md-4" style={{marginTop: '4rem', marginBottom: '6rem'}}>
                            <center>
                                <h1>Email Verification</h1>
                                <p style={{marginTop: '-19px'}}>Email verification code sent to your registrated email address email@email.com</p>
                            </center>
                            <form action="" method="post" id="commentform" className="comment-form">
                                
                                <div className="form-fields row">
                                    <span className="comment-form-author col-md-12 mt-3">
                                        <input id="author" name="email" type="text"  size={30} placeholder="Enter Email Verification Code" />
                                    </span>
                                </div>
                                <p className="form-submit" style={{marginTop: '-25px'}}>
                                    <input name="submit" type="submit" id="submit" className="submit btn-block" value="Submit"/>
                                </p>
                            </form>

                            <center  style={{paddingTop: '71px'}}>
                            <p>If you have not received your code, <br/> <span className="text-primary">click here to resend</span></p>
                            </center>
                            
                            
                        </div>
                    </div>
                </div>
            </section>
        </Body>
        )
    }
}
