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
        this.state = { 
            originalValue: '',
            originalIsSet: false 
        }
        this.contentRef = createRef();
    }

    isTyping( value ) {
        this.props.evaluate( value );
        if ( this.state.originalIsSet === false ) {
            this.setState({ originalValue: value });
        }
    }

    clear() {
        this.contentRef.current.value = '';
        this.props.evaluate( '' );
        this.setState({ 
            originalValue: '', 
            inputValue: '',
            originalIsSet: false
        });
    }

    onRandomize() {
        this.setOriginal();
        this.props.randomize( this.contentRef.current.value );
        this.setInputValue();
    }

    onAllLowercase() {
        this.setOriginal();
        this.props.allLowercase( this.contentRef.current.value );
        this.setInputValue();
    }

    onAllUpercase() {
        this.setOriginal();
        this.props.allUppercase( this.contentRef.current.value );
        this.setInputValue();
    }

    onReverse() {
        this.setOriginal();
        this.props.allReverse( this.contentRef.current.value );
        this.setInputValue();
    }

    onOriginal() {
        this.setOriginal();
        this.props.original( this.state.originalValue );
        this.setInputValue();
    }

    setInputValue() {
        console.log( this.props.inputValue );
        this.contentRef.current.value = this.props.inputValue;
    }

    setOriginal() {
        if ( this.state.originalIsSet === false ) {
            this.setState({ originalIsSet: true });
        }
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
                            className="btn btn-block text-dark"
                            onClick={() => this.onReverse()}>
                            <Icon icon={faBackward} size="sm" /> Reverse
                        </button>
                        <button 
                            className="btn btn-block text-dark"
                            onClick={() => this.onAllLowercase()}>
                            <Icon icon={faSortAlphaDown} size="sm" /> All Lowercase
                        </button>
                        <button 
                            className="btn btn-block text-dark"
                            onClick={() => this.onAllUpercase()}>
                            <Icon icon={faSortAlphaUp} size="sm" /> All Uppercase
                        </button>
                        <button 
                            className="btn btn-block text-dark"
                            onClick={() => this.onRandomize()}>
                            <Icon icon={faRandom} size="sm" /> Randomize
                        </button>
                        <button 
                            className="btn btn-block text-dark"
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


// ----
// Map State To Props
function mapStateToProps({ inputValue }) {
    return { inputValue };
}


// ----
// Content export
export default connect( mapStateToProps, actions )( Content );
