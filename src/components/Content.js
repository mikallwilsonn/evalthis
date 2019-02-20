// ----
// Dependencies
import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { 
    faEraser 
} from '@fortawesome/free-solid-svg-icons';


// ----
// Content class
class Content extends Component {

    constructor( state ) {
        super( state );
        this.contentRef = createRef();
    }

    isTyping( value ) {
        this.props.evaluate( value );
    }

    clear() {
        this.contentRef.current.value = '';
        this.props.evaluate( '' );
    }

    render() {
        return (
            <div id="content" className="col-7">
                <textarea 
                    ref={this.contentRef}
                    placeholder="Start typing here..." 
                    className="container-fluid p-4 bg-white" 
                    onChange={( event ) => this.isTyping( event.target.value )}
                ></textarea>
                <div id="button-container">
                    <button 
                        className="btn btn-primary p-3" 
                        onClick={() => this.clear()}>
                            <Icon icon={faEraser} size="lg" />
                    </button> 
                </div>

            </div>
        );
    }
}


// ----
// Content export
export default connect( null, actions )( Content );