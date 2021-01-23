import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../includes/Navbar'
import Footer from '../includes/Footer'
import {fetchHomePage} from '../actions'


export class Body extends Component {

    componentDidMount(){
        this.props.homepage===null
        ?
            this.props.fetchHomePage()
        :
            <></>
    }   


    handleDarkModChange = (a) =>{
        this.forceUpdate();
        localStorage.setItem('theme', a);
        
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
        return (
            <div id="themetype" className={`options_layout_wrapper jl_clear_at jl_radius jl_none_box_styles jl_border_radiuss jl_en_day_night `+mclass}>
                {/* <div className="options_layout_wrapper jl_clear_at jl_radius jl_none_box_styles jl_border_radiuss jl_en_day_night options_dark_skin"> */}
                <div className="options_layout_container full_layout_enable_front">

               
                        
                        <Navbar>
                            {localStorage.getItem('theme')==='today'
                                    ?
                                        <>
                                        {/* <h4>Day</h4> */}
                                        {/* DAY NIGHT */}
                                        <div id="themeday" className="jl_day_night jl_day_en" onClick={()=>this.handleDarkModChange('tonight')}> 
                                            <span className="jl-night-toggle-icon"> 
                                                <span className="jl_moon"> <i className="jli-moon"  /></span>
                                                <span className="jl_sun"> <i className="jli-sun" /></span>
                                            </span>
                                        </div>
                                        {/* DAY NIGHT */}
                                        </>
                                    :
                                        <>
                                        {/* <h4>Night</h4> */}

                                            {/* DAY NIGHT */}
                                        <div id="themeday1" className="jl_day_night jl_night_en" onClick={()=>this.handleDarkModChange('today')}> 
                                            <span className="jl-night-toggle-icon"> 
                                                <span className="jl_moon"> <i className="jli-moon"  /></span>
                                                <span className="jl_sun"> <i className="jli-sun" /></span>
                                            </span>
                                        </div>
                                        {/* DAY NIGHT */}
                             </>
                            }
                        </Navbar>

                    {/* RENDER CHILD */}
                    {this.props.children}
                    {/* RENDER CHILD */}


                    <Footer />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    homepage:state.homedatas
})

export default connect(mapStateToProps, {fetchHomePage})(Body)
