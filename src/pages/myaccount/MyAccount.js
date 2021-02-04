import React, { Component } from 'react'
import { connect } from 'react-redux'
import Body from '../../includes/Body'
import cookie from 'react-cookies'



export class MyAccount extends Component {
    render() {
        //GET LOGIN LOGOUT USER DATA
        const user = cookie.load('qbuserdata');
        // console.log(user.data[0]);

        return (
            <Body>
            <section id="content_main" className="clearfix mb-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>My Account</h1>
                        <br/><br/>
                        <center>
                        <img width="70px" src={user.data[0].imagemedium} alt=""/>
                        <h4>{user.data[0].name}</h4>
                        <h6>{user.data[0].email}</h6>

                        </center>
                    </div>
                </div>
            </div>
            </section>
            </Body>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)
