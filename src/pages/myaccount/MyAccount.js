import React, { Component } from 'react'
import { connect } from 'react-redux'
import Body from '../../includes/Body'
import Sidebar from './Sidebar'


export class MyAccount extends Component {
    render() {
        const user = this.props.user;

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

                                    {user.imagethumb === undefined
                                    ?
                                        <img src='https://www.centrik.in/wp-content/uploads/2017/02/user-image-.png' alt="" style={{height: '120px', width: '120px'}} /> 
                                    :
                                        <img width="70px" src={user.imagethumb} alt=""/>
 
                                    }

                                    <div className="dbox1 mt-4">
                                        <p>Name: {user.name}</p>
                                        <p>Email: {user.email}</p>
                                        <p>Contact: {user.contact}</p>
                                        <p>City: {user.city}</p>
                                        <p>State: {user.state}</p>
                                        <p>Country: {user.country}</p>
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
    user:state.userdetails
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)
