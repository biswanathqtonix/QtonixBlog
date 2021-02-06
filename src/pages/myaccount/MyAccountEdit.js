import React, { Component } from 'react'
import { connect } from 'react-redux'
import Body from '../../includes/Body'
import Sidebar from './Sidebar'
import API from '../../api/API'
import {storeUserDetails} from '../../actions'


export class MyAccountEdit extends Component {

    constructor(props){
        super(props)
        this.state={
            id:'',
            name:'',
            email:'',
            contact:'',
            password:'',
            city:'',
            state:'',
            country:'',
            usertype:'',
            email_verify:'',
            image:null
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleImageChange=this.handleImageChange.bind(this);
    }


    componentDidMount(){
        const user = this.props.user;

        this.setState({
            id:user._id,
            name:user.name,
            email:user.email,
            contact:user.contact,
            password:user.password,
            city:user.city,
            state:user.state,
            country:user.country,
            usertype:user.usertype,
            email_verify:user.email_verify,
        })
    }


    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    handleImageChange(e){
        this.setState({
            image:e.target.files
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        var props = this.props;


        var data = new FormData();
        data.append('id',this.state.id);
        data.append('name',this.state.name);
        data.append('contact',this.state.contact);
        data.append('password',this.state.password);
        data.append('city',this.state.city);
        data.append('state',this.state.state);
        data.append('country',this.state.country);
        data.append('image',this.state.image);
        data.append('usertype',this.state.usertype);
        data.append('email_verify',this.state.email_verify);



        var headers = {
            'Content-Type':'multipart/form-data'
        }

        API.put(`/user/userupdate/${this.state.id}`,data,headers)
        .then(response=>{
            console.log(response.data)

            //STORE IN REDUX STATE
            props.storeUserDetails(response.data.data);
          

            localStorage.removeItem('qbuserdata');
            localStorage.setItem('qbuserdata',JSON.stringify(response.data));

            this.props.history.push('/myaccount');
        })

    }

    render() {
        //GET LOGIN LOGOUT USER DATA
        const user = this.state;
        // const user = JSON.parse(localStorage.getItem('qbuserdata'));
       
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
                                    <form onSubmit={this.handleSubmit}>
                                
                                        <div className="form-fields row">
                                            <span className="comment-form-author col-md-12">
                                                <input name="email" type="email" placeholder="Your Email" value={user.email} readOnly />
                                            </span>
                                            <span className="comment-form-author col-md-12 mt-3">
                                                <input name="name" type="text" placeholder="Your Name" value={user.name} onChange={this.handleChange} />
                                            </span>
                                            <span className="comment-form-author col-md-12 mt-3">
                                                <input name="password" type="text" placeholder="Your Password" value={user.password} onChange={this.handleChange} />
                                            </span>
                                            <span className="comment-form-author col-md-12 mt-3">
                                                <input name="contact" type="text" placeholder="Your Contact" value={user.contact} onChange={this.handleChange}  />
                                            </span>
                                            <span className="comment-form-author col-md-12 mt-3">
                                                <input name="city" type="text" placeholder="Your City" value={user.city} onChange={this.handleChange}  />
                                            </span>
                                            <span className="comment-form-author col-md-12 mt-3">
                                                <input name="state" type="text" placeholder="Your State" value={user.state} onChange={this.handleChange}  />
                                            </span>
                                            <span className="comment-form-author col-md-12 mt-3">
                                                <input name="country" type="text" placeholder="Your Country" value={user.country} onChange={this.handleChange}  />
                                            </span>
                                        </div>
                                        <p className="form-submit">
                                            <input name="submit" type="submit" id="submit" className="submit btn-block" value="Update"/>
                                        </p>
                                    </form>
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

export default connect(mapStateToProps, {storeUserDetails})(MyAccountEdit)