import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../includes/Navbar'
import Footer from '../includes/Footer'
import {fetchHomePage,websiteTheme,callFooterModal,footerModalTab1,footerModalTab2,footerModalTab3,footerModalClose} from '../actions'
import { ProgressBar } from 'scrolling-based-progressbar';
import {Helmet} from "react-helmet";
import footerModalReducer from '../reducers/footerModalReducer'


export class Body extends Component {


    componentDidMount(){

        window.scrollTo(0, 0);
        this.props.homepage===null
        ?
            this.props.fetchHomePage()
        :
            <></>
    }   


    handleDarkModChange = (theme) =>{
        this.forceUpdate();
        this.props.websiteTheme(theme)
        localStorage.setItem('theme', theme);
    }


    handleYesNo(e){
        this.props.footerModalTab2(e)
    }

    closeModal(e){
        this.props.footerModalClose(e)
        this.props.footerModalTab1(false);
        this.props.footerModalTab2(false);
        this.props.footerModalTab3(false);
    }


    handleSubmit = e => {
        e.preventDefault();

        this.props.footerModalTab1(false);
        this.props.footerModalTab2(false);
        this.props.footerModalTab3(true);

    }

   
    render() {
        var theme =localStorage.getItem('theme');
        if(!theme){  
        }
        if(theme==='today'){
            var mclass ='';
        }else{
            var mclass ='options_dark_skin';   
        }

        var footerModal = this.props.footerModal;
        
        return (
            <>
            <Helmet>
                <meta charSet="utf-8" />
                
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div id="themetype" className={`options_layout_wrapper jl_clear_at jl_radius jl_none_box_styles jl_border_radiuss jl_en_day_night `+mclass}>
               
                <div className="options_layout_container full_layout_enable_front">

               
                        
                        <Navbar>
                            {localStorage.getItem('theme')==='today'
                                    ?
                                        <>
                                        
                                        <div id="themeday" className="jl_day_night jl_day_en" onClick={()=>this.handleDarkModChange('tonight')}> 
                                            <span className="jl-night-toggle-icon"> 
                                                <span className="jl_moon"> <i className="jli-moon"  /></span>
                                                <span className="jl_sun"> <i className="jli-sun" /></span>
                                            </span>
                                        </div>
                                       
                                        </>
                                    :
                                        <>
                             
                                        <div id="themeday1" className="jl_day_night jl_night_en" onClick={()=>this.handleDarkModChange('today')}> 
                                            <span className="jl-night-toggle-icon"> 
                                                <span className="jl_moon"> <i className="jli-moon"  /></span>
                                                <span className="jl_sun"> <i className="jli-sun" /></span>
                                            </span>
                                        </div>
                                       
                             </>
                            }
                        </Navbar>
                        <ProgressBar height="5px" top="81px"
                        ProgressBarStyle={{backgroundColor:'#1976d2'}} />

                    {this.props.children}
              

                    

                    <Footer />
                </div>
            </div>
           

            {/* isFooterModalOpen */}
               
            
            {footerModal===undefined
                ?
                <></>  
                :

                // CHECK MODAL WILL BE OPEN OR NOT
                footerModal.isFooterModalOpen===true
                ?
                    <div id="bottom-box" className="form"> 
                        <span className="footercancel cursorpointer" onClick={(e)=>this.closeModal(false)}>X</span>
                        <div className="step step-1">
                            
                            
                            {/* CHECK MAIN TAB */}
                            {footerModal.isFooterMainTab===true
                            ?
                            <>
                            <div className="logo"><img className="img" src="https://neilpatel.com/wp-content/themes/neilpatel/images/google.svg" width={26} height={26} alt="Google" /></div>
                            <div className="textftr">
                                <p className="q">Do you want more traffic from Google?</p>
                                <p className="a"><span className="yes cursorpointer" onClick={(e)=>this.handleYesNo(true)}> <img src="https://neilpatel.com/wp-content/themes/neilpatel/images/yes.svg" alt=""/>  Yes, I do</span><span className="no cursorpointer"onClick={(e)=>this.handleYesNo(false)}><img src="https://neilpatel.com/wp-content/themes/neilpatel/images/no.svg" alt=""/> Not Now</span></p>
                            </div>
                            </>
                            :
                            <>
                            </>
                            }
                            
        
                        
                            {/* CHECK IF TAB IS OPEN OR NOT */}
                            {footerModal.isFooterModalTab2Open===true
                                ?
                                    <>
                                        <br/>
                                        <div className="">
                                            <h4 className="text-white">Let’s grow your traffic!</h4>
                                            <p className="text-white boxwhte2">We’ve driven 1.3 billion visitors to startups and Fortune 100 brands. Fill out the form below to schedule your call.</p>
                                            <form action="" onSubmit={this.handleSubmit}>
                                                <div className="form-group">
                                                    <input type="text" className="form-control boxforms" placeholder="What’s your name?" />
                                                </div>
                                                <input type="submit" className="btn btn-block" value="BOOK A CALL"/>
                                            </form>
                                        </div>
                                    </>
                                :
                                    <>
                                    </>
                            }


                            {/* SUCCESS MESSAGE */}
                            {footerModal.isFooterModalSubmit===true
                            ?
                            <>
                            Thank You...
                            </>
                            :
                            <>

                            </>
                            }
                            



                        </div>
                    </div>
                :
                <>
                </>


                
                




            }



            
            
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    homepage:state.homedatas,
    footerModal:state.footerModal
})

export default connect(mapStateToProps, {fetchHomePage,websiteTheme,callFooterModal,footerModalTab1,footerModalTab2,footerModalTab3,footerModalClose})(Body)
