import React, { Component } from 'react'
import { connect } from 'react-redux'
import Body from '../../includes/Body'
import cookie from 'react-cookies'



export class MyAccount extends Component {
    render() {
        //GET LOGIN LOGOUT USER DATA
        const user = cookie.load('qbuserdata');

        return (
            <Body>
            <section id="content_main" className="clearfix mb-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1>My Account</h1>
                        <h4>Welcome {user.data.name}</h4>
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
