// ----
// Dependencies
import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { 
    faEraser, faEllipsisH, faRandom, faSortAlphaUp, 
    faSortAlphaDown, faBackward, faTimes 
} from '@fortawesome/free-solid-svg-icons';


// ----
// Content class
class Content extends Component {

    constructor( state ) {
        super( state );
        this.contentRef = createRef();
        this.modifiedContainerRef = createRef();
        this.modifiedResultsRef = createRef();
    }

    isTyping( value ) {
        this.props.evaluate( value );
    }

    clear() {
        this.contentRef.current.value = '';
        this.props.evaluate( '' );
        this.modifiedContainerRef.current.style.display ="none";
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


    componentDidUpdate() {
        const { modified } = this.props;
        if ( modified ) {
            this.modifiedContainerRef.current.style = { display: 'block !important' };
            this.modifiedResultsRef.current.innerHTML = modified;
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
                        <div className="dropdown-divider"></div>
                        <button 
                            className="btn btn-block text-danger"
                            onClick={() => this.clear()}>
                            <Icon icon={faEraser} size="sm" /> Clear
                        </button>
                    </div>
                </div>

                <div 
                    id="modified_results"
                    className="bg-white text-muted col-lg-12 p-3"
                    style={{ display: 'none' }}
                    ref={this.modifiedContainerRef}
                >
                    <div className="row col-lg-12 justify-content-space-between align-items-center text-left">
                        <div className="col-md-6 align-items-center text-left" >
                            <strong>Modified Results: </strong>
                        </div>
                        <div className="col-md-6 align-items-center text-right pr-0" >
                            <button 
                                className="btn"
                                onClick={() => this.modifiedContainerRef.current.style.display ="none" }
                            >
                                <Icon icon={faTimes} />
                            </button>
                        </div>
                    </div>
                    <div 
                        className="text-muted col-lg-12 p-3"
                        ref={this.modifiedResultsRef}
                    >
                    </div>
                </div>

            </div>
        );
    }
}


// ----
// Map State To Props
function mapStateToProps({ modified }) {
    return { modified };
}


// ----
// Content export
export default connect( mapStateToProps, actions )( Content );
