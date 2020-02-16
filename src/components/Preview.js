// next: animate, replace url


import React, { Component } from 'react'
import Iframe from 'react-iframe'
import $ from 'jquery'

// import Microlink from '@microlink/react'


export class Preview extends Component {

    
    render() {
    
        return (
            // <Iframe url={this.props.url}
            <div className='wrapper'>
                <Iframe 
                    url={this.props.url}
                    // url={'https://www.google.com'}
                    // width="450px"
                    // height="450px"
                    className="frame"
                    id="preview-box"
                    // display="initial"
                    // position="relative"
                    
                />
                <div 
                    className='transparent-overlay' 
                    onClick={(e) => {
                        e.stopPropagation()
                        debugger
                        $('#preview-box').toggleClass("fullScreen");
                        // console.log('bang')
                        
                    }}
                />
            </div>
        )

        
    }
}

export default Preview
