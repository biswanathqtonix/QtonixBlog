import React, { Component } from 'react'
import { connect } from 'react-redux'
import Body from '../../includes/Body'
import cookie from 'react-cookies'
import Sidebar from './Sidebar'


export class MyAccount extends Component {
    render() {
        //GET LOGIN LOGOUT USER DATA
        const user = cookie.load('qbuserdata');

        return (
            <Body>
            <section id="content_main" className="clearfix mb-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Dashboard</h1>


                        <div className="row">
                            <div className="col-md-3 mt-4">
                                <Sidebar />
                            </div>

                            <div className="col-md-9 mt-4">
                            <div className="card">
                                <div className="card-body">
                                    <img width="70px" src={user.data[0].imagemedium} alt=""/>
                                    <div className="dbox1 mt-4">
                                        <p>Name: {user.data[0].name}</p>
                                        <p>Email: {user.data[0].email}</p>
                                        <p>Contact: {user.data[0].contact}</p>
                                        <p>City: {user.data[0].city}</p>
                                        <p>State: {user.data[0].state}</p>
                                        <p>Country: {user.data[0].country}</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <br/><br/><br/><br/><br/><br/>
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
