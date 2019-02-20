// ----
// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';


// ----
// Child Components
import Result from './results/Result';


// ----
// Results class
class Results extends Component {

    componentDidMount() {
        this.props.evaluate('');
    }

    render() {
        const { results } = this.props;

        if ( !this.props.results ) {
            return (
                <div>Loading...</div>
            );
        }

        return(
            <div id="results" className="col-4 bg-white p-3 m-0">
                Results
                <div class="dropdown-divider"></div>
                <Result title={results.characters.label} value={results.characters.length} />
                <Result title={results.letters.label} value={results.letters.length} />
                <Result title={results.numbers.label} value={results.numbers.length} />
                <Result title={results.puncuation.label} value={results.puncuation.length} />
                <Result title={results.words.label} value={results.words.length} />
                <Result title={results.sentences.label} value={results.sentences.length} />
                <Result title={results.paragraphs.label} value={results.paragraphs.length} />
            </div>
        );
    }
}


// ----
function mapStateToProps({ results }) {
    return { results }
}


// ----
// Results export
export default connect( mapStateToProps, actions )( Results );
