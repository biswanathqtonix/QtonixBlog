import React, { Component } from 'react'
import { connect } from 'react-redux'
import Body from '../../includes/Body'
import cookie from 'react-cookies'
import Sidebar from './Sidebar'
import API from '../../api/API'

export class MyAccountEdit extends Component {

    constructor(props){
        super(props)
        this.state={
            id:'',
            name:'',
            email:'',
            contact:'',
            // password:'',
            city:'',
            state:'',
            country:'',
            image:null
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleImageChange=this.handleImageChange.bind(this);
    }


    componentDidMount(){
        const user = cookie.load('qbuserdata');
        // console.log(user);
        this.setState({
            id:user.data[0]._id
            // name:user.data[0].name,
            // email:user.data[0].email,
            // contact:user.data[0].contact,
            // password:user.data[0].password,
            // city:user.data[0].city,
            // state:user.data[0].state,
            // country:user.data[0].country,
        })
    }


    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    handleImageChange(e){
        this.setState({
            image:e.target.files[0]
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        var data = new FormData();
        data.append('id',this.state.id);
        data.append('name',this.state.name);
        data.append('contact',this.state.contact);
        data.append('password',this.state.password);
        data.append('city',this.state.city);
        data.append('state',this.state.state);
        data.append('country',this.state.country);
        data.append('image',this.state.image);


        var headers = {
            'Content-Type':'multipart/form-data'
        }

        API.put(`/user/${this.state.id}`,data,headers)
        .then(response=>{
            // console.log(response.data)
            

            cookie.remove('qbuserdata')
            // cookie.remove('qbuserlogin', { path: '/' })

            cookie.save('qbuserdata', response.data);

            this.props.history.push('/myaccount');

        })

    }

    render() {
        //GET LOGIN LOGOUT USER DATA
        const user = cookie.load('qbuserdata');
        console.log(user.data[0]);

        return (
            <Body>
            <section id="content_main" className="clearfix mb-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Edit Profile</h1>


                        <div className="row">
                            <div className="col-md-3 mt-4">
                                <Sidebar />
                            </div>

                            <div className="col-md-9 mt-4">
                            <div className="card">
                                <div className="card-body">
                                    {/* <img width="70px" src={user.data[0].imagemedium} alt=""/> */}
                                    <div className="dbox1 mt-4">
                                    <form onSubmit={this.handleSubmit} method="post"  className="comment-form">
                                
                                        <div className="form-fields row">
                                            <span className="comment-form-author col-md-12">
                                                <input name="email" type="email" placeholder="Your Email" defaultValue={user.data[0].email} readOnly />
                                                
                                            </span>
                                            <span className="comment-form-author col-md-12 mt-3">
                                                <input name="name" type="text" placeholder="Your Name" defaultValue={user.data[0].name} onChange={this.handleChange} />
                                            </span>
                                            <span className="comment-form-author col-md-12 mt-3">
                                                <input name="password" type="text" placeholder="Your Password" defaultValue={user.data[0].password} onChange={this.handleChange} />
                                                
                                            </span>
                                            <span className="comment-form-author col-md-12 mt-3">
                                                <input name="contact" type="text" placeholder="Your Contact" defaultValue={user.data[0].contact} onChange={this.handleChange}  />
                                            </span>
                                            <span className="comment-form-author col-md-12 mt-3">
                                                <input name="city" type="text" placeholder="Your City" defaultValue={user.data[0].city} onChange={this.handleChange}  />
                                            </span>
                                            <span className="comment-form-author col-md-12 mt-3">
                                                <input name="state" type="text" placeholder="Your State" defaultValue={user.data[0].state} onChange={this.handleChange}  />
                                            </span>
                                            <span className="comment-form-author col-md-12 mt-3">
                                                <input name="country" type="text" placeholder="Your Country" defaultValue={user.data[0].country} onChange={this.handleChange}  />
                                            </span>

                                            <span className="comment-form-email col-md-12 mt-3">
                                                <input name="" type="file" onChange={this.handleImageChange} />
                                            </span>
                                        </div>
                                        <p className="form-submit">
                                            <input name="submit" type="submit" id="submit" className="submit btn-block" value="Update"/>
                                        </p>
                                    </form>

                                        

                                        {/* <p>Name: {user.data[0].name}</p>
                                        <p>Email: {user.data[0].email}</p>
                                        <p>Contact: {user.data[0].contact}</p>
                                        <p>City: {user.data[0].city}</p>
                                        <p>State: {user.data[0].state}</p>
                                        <p>Country: {user.data[0].country}</p> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountEdit)
