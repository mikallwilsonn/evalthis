// ----
// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';


// ----
// Child Components
import Result from './results/Result';
import SocialResult from './results/SocialResult';


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
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="results-tab" data-toggle="tab" href="#results-show" role="tab" aria-controls="results" aria-selected="true">Results</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="social-tab" data-toggle="tab" href="#social" role="tab" aria-controls="social" aria-selected="false">Social</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="keywords-tab" data-toggle="tab" href="#keywords" role="tab" aria-controls="keywords" aria-selected="false">Key Words</a>
                    </li>
                </ul>
                <div className="tab-content p-3" id="myTabContent">

                    <div className="tab-pane fade show active" id="results-show" role="tabpanel" aria-labelledby="results-tab">
                        <Result title={results.characters.label} value={results.characters.length} />
                        <Result title={results.letters.label} value={results.letters.length} />
                        <Result title={results.numbers.label} value={results.numbers.length} />
                        <Result title={results.puncuation.label} value={results.puncuation.length} />
                        <Result title={results.words.label} value={results.words.length} />
                        <Result title={results.sentences.label} value={results.sentences.length} />
                        <Result title={results.paragraphs.label} value={results.paragraphs.length} />
                    </div>

                    <div className="tab-pane fade" id="social" role="tabpanel" aria-labelledby="social-tab">
                        <SocialResult 
                            title={results.facebook.label} 
                            value={results.facebook.length}
                            limit={results.facebook.limit}
                        />
                        <SocialResult 
                            title={results.twitter.label} 
                            value={results.twitter.length}
                            limit={results.twitter.limit}
                        />
                        <SocialResult 
                            title={results.linkedin.label} 
                            value={results.linkedin.length}
                            limit={results.linkedin.limit}
                        />
                        <SocialResult 
                            title={results.google.label} 
                            value={results.google.length}
                            limit={results.google.limit}
                        />
                        <SocialResult 
                            title={results.instagram.label} 
                            value={results.instagram.length}
                            limit={results.instagram.limit}
                        />
                    </div>
                    <div className="tab-pane fade" id="keywords" role="tabpanel" aria-labelledby="keywords-tab">Coming Soon!</div>
                </div>

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
