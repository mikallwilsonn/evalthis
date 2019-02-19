// ----
// Dependencies
import React, { Component } from 'react';


// ----
// Content class
class Content extends Component {
    render() {
        return (
            <div id="content" className="col-6">
                <textarea 
                    placeholder="Start typing here..." 
                    className="container-fluid p-4" 
                ></textarea>
            </div>
        );
    }
}


// ----
// Content export
export default Content;