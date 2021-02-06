import React, { Component } from 'react'
import { connect } from 'react-redux'
import Body from '../../includes/Body'
import Sidebar from './Sidebar'
import API from '../../api/API'
import {storeUserDetails} from '../../actions'
import { store } from 'react-notifications-component';



export class MyAccountEdit extends Component {

    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            contact:'',
            password:'',
            city:'',
            state:'',
            country:'',
            image:null
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleImageChange=this.handleImageChange.bind(this);
    }


    componentDidMount(){
        const user = this.props.user;

        this.setState({
            name:user.name,
            email:localStorage.getItem('qbuseremail'),
            contact:user.contact,
            password:user.password,
            city:user.city,
            state:user.state,
            country:user.country,
        })
    }


    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    handleImageChange(e){
        
        this.setState({
            image: e.target.files[0]
        })

    }

    handleImageSubmit = e => {
        e.preventDefault();

        var props = this.props;
        var id = localStorage.getItem('qbuserid');

        var formData = new FormData();
        formData.append('image',this.state.image);

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        API.put(`/user/userimageupdate/${id}`,formData,config)
        .then(response=>{

            if(response.data.response==='true'){

                props.storeUserDetails(response.data.data);

                localStorage.removeItem('qbuserimage');
                localStorage.setItem('qbuserimage',response.data.data.imagethumb);


                store.addNotification({
                    title: 'Success',
                    message: 'Successfully Updated.',
                    type: 'success',                         
                    container: 'top-right',                
                    animationIn: ["animated", "fadeIn"],     
                    animationOut: ["animated", "fadeOut"],   
                    dismiss: {
                      duration: 3000
                    }
                })

        
                this.props.history.push('/myaccount');

            }else{
                alert('Failed Please try again.')
            }
            
            
        })

    }



    handleSubmit = e => {
        e.preventDefault();

        var props = this.props;
        var id = localStorage.getItem('qbuserid');

        API.put(`/user/userupdate/${id}`,this.state)
        .then(response=>{
            if(response.data.response==='true'){

                store.addNotification({
                    title: 'Success',
                    message: 'Successfully Updated.',
                    type: 'success',                         
                    container: 'top-right',                
                    animationIn: ["animated", "fadeIn"],     
                    animationOut: ["animated", "fadeOut"],   
                    dismiss: {
                      duration: 3000
                    }
                })

                props.storeUserDetails(response.data.data);
                this.props.history.push('/myaccount');


            }else{
                alert('Failed please try again')
            }

            
        })

    }



    render() {
        //GET LOGIN LOGOUT USER DATA
        const user = this.state;
       
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
                            <div className="row">
                                <div className="col-md-6 mt-3">
                                    
                                            {/* <img width="70px" src={user.data[0].imagemedium} alt=""/> */}
                                            {/* <div className="dbox1"> */}
                                            <h5>Change Profile Details</h5>    

                                            <form onSubmit={this.handleSubmit}>
                                        
                                                <div className="form-fields row">
                                                    <span className="comment-form-author col-md-12">
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
                                            {/* </div> */}
                                        
                                </div>

                                <div className="col-md-6 mt-3">
                                   
                                    <h5>Change Profile Image</h5>    
                                    <form action="" onSubmit={this.handleImageSubmit}>
                                        <span className="comment-form-author mt-3">
                                            
                                             <input name="country" type="file" onChange={this.handleImageChange}  />
                                        </span>
                                        <p className="form-submit">
                                            <input name="submit" type="submit" id="submit" className="submit btn-block" value="Update"/>
                                        </p>
                                    </form>
                                       
                                </div>
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
