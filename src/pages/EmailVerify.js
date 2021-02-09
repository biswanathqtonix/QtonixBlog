import React, { Component } from 'react'
import { connect } from 'react-redux'
import Body from '../includes/Body'
import API from '../api/API'
import $ from 'jquery'
import { store } from 'react-notifications-component';
import {storeUserDetails} from '../actions'
import {Helmet} from "react-helmet";

export class EmailVerify extends Component {

    resendcode=(id,email)=>{
        var data = {id:id,email:email}
        API.post('/user/send-email-verification-code',data)
        .then(response=>{
            if(response.data.response===true){
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
            }else{
                alert('Failed');
            }
        })
    } 


    codeverify = e => {
        e.preventDefault();

        var id = $('#myid').val();
        var code = $('#mycode').val();
        var data = {
            id:id,
            code:code
        }

        API.post('/user/verify-email-code',data)
        .then(response=>{
             var props = this.props;

            if(response.data.response===true){
                store.addNotification({
                    title: 'Success',
                    message: 'Verification Success',
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
                localStorage.setItem('qbuserid',response.data.data._id);
                localStorage.setItem('qbuseremail',response.data.data.email);
                localStorage.setItem('qbuserimage',response.data.data.imagethumb);
                localStorage.setItem('qbuseremailverify',response.data.data.email_verify);

        
                // localStorage.removeItem('qbuseremailverify');
                // localStorage.setItem('qbuseremailverify',response.data.data.email_verify);

                props.storeUserDetails(response.data.data);

                this.props.history.push('/myaccount');

            }else{
                store.addNotification({
                    title: 'Failed',
                    message: 'Wrong verification code',
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
        var user = this.props.user;
        return (
            <Body>
                <section id="content_main" className="clearfix mb-5 mt-5">
                    <div className="container myvh">
                        <div className="row main_content">
                        <div className="container col-md-4" style={{marginTop: '4rem', marginBottom: '6rem'}}>
                                <center>
                                    <h1>Email Verification</h1>
                                    <p style={{marginTop: '-19px'}}>Hi {user.name} your e-mail verification code sent to your registrated email address {user.email}</p>
                                </center>
                                <form onSubmit={this.codeverify} className="comment-form">
                                    
                                    <div className="form-fields row">
                                        <input type="text" id="myid" value={user._id} hidden/>
                                        <span className="comment-form-author col-md-12 mt-3">
                                            <input id="mycode"  type="text" size={30} placeholder="Enter Email Verification Code" />
                                        </span>
                                    </div>
                                    <p className="form-submit" style={{marginTop: '-25px'}}>
                                        <input name="submit" type="submit" id="submit" className="submit btn-block" value="Verify"/>
                                    </p>
                                </form>

                                <center  style={{paddingTop: '71px'}}>
                                <p>If you have not received your code, <br/> 
                                <a className="btn btn-sm btm-primary resendbutton" onClick={(e)=>this.resendcode(user._id,user.email)}>click here to resend</a>
                                </p>
                                </center>
                                
                            
                            </div>
                        </div>
                    </div>
                </section>
                <br/><br/><br/><br/><br/><br/><br/><br/>
            </Body> 
        )
    }
}

const mapStateToProps = (state) => ({
    user:state.userdetails
})


export default connect(mapStateToProps, {storeUserDetails})(EmailVerify)



// import React, { Component } from 'react'
// import Body from '../includes/Body'


// export default class EmailVerify extends Component {
//     render() {
//         return (
//             <Body>
//                 <section id="content_main" className="clearfix mb-5 mt-5">
//                     <div className="container">
//                         <div className="row main_content">
//                         <div className="container col-md-4" style={{marginTop: '4rem', marginBottom: '6rem'}}>
//                                 <center>
//                                     <h1>Email Verification</h1>
//                                     <p style={{marginTop: '-19px'}}>Email verification code sent to your registrated email address email@email.com</p>
//                                 </center>
//                                 <form action="" method="post" id="commentform" className="comment-form">
                                    
//                                     <div className="form-fields row">
//                                         <span className="comment-form-author col-md-12 mt-3">
//                                             <input id="author" name="email" type="text"  size={30} placeholder="Enter Email Verification Code" />
//                                         </span>
//                                     </div>
//                                     <p className="form-submit" style={{marginTop: '-25px'}}>
//                                         <input name="submit" type="submit" id="submit" className="submit btn-block" value="Submit"/>
//                                     </p>
//                                 </form>

//                                 <center  style={{paddingTop: '71px'}}>
//                                 <p>If you have not received your code, <br/> <span className="text-primary">click here to resend</span></p>
//                                 </center>
                                
                                
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </Body>
//         )
//     }
// }
