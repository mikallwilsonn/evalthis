// ----
// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


// ----
// Content class
class Content extends Component {

    isTyping( value ) {
        this.props.evaluate( value );
    }

    render() {
        return (
            <div id="content" className="col-7">
                <textarea 
                    placeholder="Start typing here..." 
                    className="container-fluid p-4 bg-white" 
                    onChange={( event ) => this.isTyping( event.target.value )}
                ></textarea>
            </div>
        );
    }
}


// ----
// Content export
export default connect( null, actions )( Content );