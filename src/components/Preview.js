import React, { Component } from 'react'
import Iframe from 'react-iframe'
import $ from 'jquery'


export class Preview extends Component {

    
    render() {
    
        return (
            <div className='wrapper'>

                {/* Actual site in an iframe, miniaturized via a transform */}
                <Iframe 
                    url={this.props.url}
                    className="frame"
                    id={this.props.id}
                    
                />

                {/* Sits on top of iframe and accepts clicks */}
                <div 
                    className='transparent-overlay' 
                    onClick={(e) => {
                        e.stopPropagation()
                        $('#' + this.props.id).toggleClass("fullScreen")

                        // Add slug to the url
                        const state = { 'page_id': this.props.id }
                        const title = ''
                        const url_slug = this.props.id
                        window.history.pushState(state, title, url_slug)
                    }}
                />
            </div>
        )

        
    }


    componentDidMount() {

        // When user hits "back", remove fullscreen state
        window.addEventListener('popstate',(e)=>{
            $('.frame').removeClass("fullScreen")
        })
    }
}

export default Preview
