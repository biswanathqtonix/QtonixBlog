import React, { Component } from 'react'
import { connect } from 'react-redux'
// import ContentLoader from "react-content-loader"
import Loader from 'react-loader-spinner'
import Body from '../includes/Body'
import HomeView1 from '../includes/home/HomeView1';
import HomeView2 from '../includes/home/HomeView2';
import HomeView3 from '../includes/home/HomeView3'
import HomeCatView1 from '../includes/home/HomeCatView1'
import HomeCatView2 from '../includes/home/HomeCatView2'
import HomeCatView3 from '../includes/home/HomeCatView3'

import {Helmet} from "react-helmet";


export class Home extends Component {

    render() {
        var getdata = this.props.homedata;
        if(getdata===null){
        }
        

        return (
            <React.Fragment>
                    <Body metadata={{
                        "metatitle":  getdata===null ? 'Loading...' : getdata.seohome.metatitle,
                        "metadescription": getdata===null ? 'Loading...' : getdata.seohome.metadescription,
                        "metakeyword": "No Key Word",
                    }}>
                    <Helmet>
                        <title>Home</title>
                    </Helmet>

                        
                                        
                    <div className="mobile_menu_overlay" />
                        <div className="jl_home_bw">
                        <section className="home_section1">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                <div className="jl_mright_wrapper jl_clear_at">
                                    <div className="jl_mix_post">
                                    {/* MAIN */}

                                    {getdata===null
                                    ?
                                    <center className="mt-5 mb-5">
                                        <Loader type="Oval" color="#00BFFF" height={30} width={30} />
                                    </center>
                                    :
                                        <>
                                        <HomeView1 data={getdata.latest4blog[0]} />
                                        {/* OTHER */}
                                        <HomeView2 data={getdata.latest4blog[1]} />
                                        <HomeView2 data={getdata.latest4blog[2]} />
                                        <HomeView2 data={getdata.latest4blog[3]} />
                                        </>
                                    }
                                    
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </section>
                        <section className="home_section2">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                <div id="blockid_72be465" className="block-section jl-main-block" data-blockid="blockid_72be465" data-name="jl_mgrid" data-page_max={11} data-page_current={1} data-author="none" data-order="date_post" data-posts_per_page={6} data-offset={5}>
                                    <div className="jl_grid_wrap_f jl_clear_at g_3col">
                                    <div className="jl-roww content-inner jl-col3 jl-col-row">
                                        <div className="jl_sec_title">
                                        <h3 className="jl_title_c"><span>Editors Picks Post (Random 6 Blogs)</span></h3>
                                        <p>This is an optional subtitle for post section</p>
                                        </div>

                                        {getdata===null
                                        ?
                                        <center className="mt-5 mb-5 w-100">
                                            <Loader type="Oval" color="#00BFFF" height={30} width={30} />
                                        </center>
                                        :
                                        <>
                                        {getdata.random6blog.map((rdata)=>{
                                            return(
                                                <>
                                                <HomeView3 key={rdata._id} data={rdata} />
                                                </>
                                            )
                                        })}
                                        </>
                                        }   

                        
                                    </div>
                                    {/* <div className="jl_lmore_wrap">
                                        <div className="jl_lmore_c"> <a href="#" className="jl-load-link"><span>load more</span></a><span className="jl-load-animation"><span /></span></div>
                                    </div> */}
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </section>
                        <section className="home_section3">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                <div className="jl_sec_title">
                                    <h3 className="jl_title_c">Random 5 Category</h3>
                                    <p>This is an optional subtitle for post section</p>
                                </div>
                                <div className="jl_mg_wrapper jl_clear_at">
                                    <div className="jl_mg_post jl_clear_at">
                                    
                                    {getdata===null
                                        ?
                                        <center className="mt-5 mb-5 w-100">
                                            <Loader type="Oval" color="#00BFFF" height={30} width={30} />
                                        </center>
                                        :
                                        <>
                                            {/* CHECK CATEGORY AVAILABLE OR NOT */}
                                            {getdata.blogcategory5random[0]
                                            ?
                                            <HomeCatView1 data={getdata.blogcategory5random[0]}/>
                                            :
                                             <>Please Add One More Category</>   
                                            }

                                            {getdata.blogcategory5random[1] ? <HomeCatView2 data={getdata.blogcategory5random[1]} /> : <>Please Add One More Category</>}
                                            {getdata.blogcategory5random[2] ? <HomeCatView2 data={getdata.blogcategory5random[2]} /> : <>Please Add One More Category</>}
                                            {getdata.blogcategory5random[3] ? <HomeCatView2 data={getdata.blogcategory5random[3]} /> : <>Please Add One More Category</>}
                                            {getdata.blogcategory5random[4] ? <HomeCatView2 data={getdata.blogcategory5random[4]} /> : <>Please Add One More Category</>}
                                               
                                            
                                        </>
                                    }
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </section>
                        <section className="home_section4">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                <div id="blockid_3f9d058" className="block-section jl-main-block">
                                    <div className="jl_grid_wrap_f jl_clear_at g_4col">
                                    <div className="jl-roww content-inner jl-col3 jl-col-row">
                                        <div className="jl_sec_title">
                                        <h3 className="jl_title_c"><span>
                                            {getdata===null
                                            ?
                                            <span>Loading...</span>
                                            :
                                            <>
                                            {getdata.blogcategory5random[0].name}
                                            </>
                                            }
                                             </span></h3>
                                        <p>This is an optional subtitle for post section</p>
                                        </div>

                                    
                                        
                                        {getdata===null
                                        ?
                                        <center className="mt-5 mb-5 w-100">
                                            <Loader type="Oval" color="#00BFFF" height={30} width={30} />
                                        </center>
                                        :
                                        <>
                                        {getdata.blogcategory5random4getblog.map((bcb)=>{
                                            return(
                                                <HomeCatView3 key={bcb._id} data={bcb} />
                                            )
                                        })}
                                        </>
                                        }


                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </section>
                        
                        
                        
                        
                        {/* <section className="home_section7">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                <div id="blockid_84d79c5" className="block-section jl-main-block">
                                    <div className="jl_grid_wrap_f jl_sf_grid jl_clear_at">
                                    <div className="jl-roww content-inner jl-col3 jl-col-row">
                                        <div className="jl_sec_title">
                                        <h3 className="jl_title_c"><span>Stories (Last 6 Blog)</span></h3>
                                        <p>This is an optional subtitle for post section</p>
                                        </div>

                                       

                                        <HomeView4 />
                                        <HomeView4 />
                                        <HomeView4 />
                                        <HomeView4 />
                                        <HomeView4 />
                                        <HomeView4 />

                                        


                                        
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </section> */}
                        </div>
                        {/* end content */}{/* Start footer */}
                        



                    </Body>

            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    homedata:state.homedatas
})


export default connect(mapStateToProps)(Home)
