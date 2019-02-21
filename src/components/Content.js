// ----
// Dependencies
import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { 
    faEraser, faEllipsisH, faRandom, faSortAlphaUp, 
    faSortAlphaDown, faBackward, faUndo 
} from '@fortawesome/free-solid-svg-icons';


// ----
// Content class
class Content extends Component {

    constructor( state ) {
        super( state );
        state = { originalValue: '' }
        this.contentRef = createRef();
    }

    componentDidUpdate() {
        if ( this.props.inputValue.length > 0 ) {
            this.contentRef.current.value = this.props.inputValue;
        }
    }

    isTyping( value ) {
        this.props.evaluate( value );
        this.setState({ originalValue: value })
    }

    clear() {
        this.contentRef.current.value = '';
        this.props.evaluate( '' );
    }

    onRandomize() {
        this.props.randomize( this.contentRef.current.value );
    }

    onAllLowercase() {
        this.props.allLowercase( this.contentRef.current.value );
    }

    onAllUpercase() {
        this.props.allUppercase( this.contentRef.current.value );
    }

    onReverse() {
        this.props.allReverse( this.contentRef.current.value );
    }

    onOriginal() {
        this.props.original( this.state.originalValue );
    }

    render() {
        return (
            <div id="content" className="col-lg-7">
                <textarea 
                    ref={this.contentRef}
                    placeholder="Start typing here..." 
                    className="container-fluid p-4 bg-white" 
                    onChange={( event ) => this.isTyping( event.target.value )}
                ></textarea>
                <div id="button-container" className="btn-group dropup">
                    <button 
                        type="button"
                        className="btn btn-primary p-3 dropdown-toggle" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false">
                            <Icon icon={faEllipsisH} size="lg" />
                    </button> 
                    <div className="dropdown-menu">
                        <button 
                            className="btn btn-block text-muted"
                            onClick={() => this.onReverse()}>
                            <Icon icon={faBackward} size="sm" /> Reverse
                        </button>
                        <button 
                            className="btn btn-block text-muted"
                            onClick={() => this.onAllLowercase()}>
                            <Icon icon={faSortAlphaDown} size="sm" /> All Lowercase
                        </button>
                        <button 
                            className="btn btn-block text-muted"
                            onClick={() => this.onAllUpercase()}>
                            <Icon icon={faSortAlphaUp} size="sm" /> All Uppercase
                        </button>
                        <button 
                            className="btn btn-block text-muted"
                            onClick={() => this.onRandomize()}>
                            <Icon icon={faRandom} size="sm" /> Randomize
                        </button>
                        <button 
                            className="btn btn-block text-muted"
                            onClick={() => this.onOriginal()}>
                            <Icon icon={faUndo} size="sm" /> Original
                        </button>
                        <div className="dropdown-divider"></div>
                        <button 
                            className="btn btn-block text-danger"
                            onClick={() => this.clear()}>
                            <Icon icon={faEraser} size="sm" /> Clear
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}


function mapStateToProps({ inputValue }) {
    return { inputValue };
}


// ----
// Content export
export default connect( mapStateToProps, actions )( Content );
