import React, { Component } from 'react'
import { connect } from 'react-redux'
import Body from '../includes/Body'
import {fetchDynamicPage} from '../actions'
import Loader from 'react-loader-spinner'
import {Helmet} from "react-helmet";


export class DynamicPage extends Component {

    


    componentDidMount(){
        this.props.fetchDynamicPage(this.props.match.params.custompage)
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.url !== this.props.match.url){
            this.props.fetchDynamicPage(this.props.match.params.custompage)
        }
    }

    render() {
        var page = this.props.page;

        console.log(page)

        return (
            <React.Fragment>
                <Body>
                    {page !== null
                    ?
                    <Helmet>
                    <title>{page.metatitle}</title>
                    <meta name="description" content={page.metadescription} />
                    </Helmet>
                    :
                    <Helmet>
                    <title>Qtonix Blog</title>
                    </Helmet>
                    }
                    <section id="content_main" className="clearfix">
                        <div className="container">
                            <div className="row main_content">
                                {/* begin content */}
                                <div className="col-md-12">
                                    {page===null
                                    ?
                                    <h1 className="text-center mt-5 mb-5"><Loader
                                                type="TailSpin"
                                                color="#007bff"
                                                height={100}
                                                width={100}
                                        /></h1>
                                    :
                                    <div dangerouslySetInnerHTML={{__html: page.content}} />
                                    } 
                                </div>
                            </div>
                        </div>
                    </section>
                </Body>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    page:state.page
})


export default connect(mapStateToProps, {fetchDynamicPage})(DynamicPage)
