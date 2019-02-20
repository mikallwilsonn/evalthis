// ----
// Dependencies
import React, { Component } from 'react';


// ----
// Result class
class Result extends Component {
    render() {
        const { title, value } = this.props;
        return (
            <div className="result container-fluid row justify-content-between align-items-center p-2 m-0">
                <div className="result_title col-8 p-0 text-left">
                    {title}
                </div>
                <div className="result_value col-4 p-0 text-right">
                    {value}
                </div>
            </div>
        );
    }
}


// -----
// Result export
export default Result;
