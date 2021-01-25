import React, { Component } from 'react'
import { connect } from 'react-redux'
import Body from '../includes/Body'
import {fetchDynamicPage} from '../actions'


export class DynamicPage extends Component {

    componentDidMount(){
        this.props.fetchDynamicPage(this.props.match.params.custompage)
    }

    render() {
        var page = this.props.page;
        console.log(page)
        return (
            <React.Fragment>
                <Body>
                    <section id="content_main" className="clearfix">
                        <div className="container">
                            <div className="row main_content">
                                {/* begin content */}
                                <div className="col-md-12">
                                    {page===null
                                    ?
                                    <p>NULL</p>
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
