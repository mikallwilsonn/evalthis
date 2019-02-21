// ----
// Dependencies
import React, { Component } from 'react';


// ----
// Result class
class Result extends Component {
    render() {
        const { title, value } = this.props;
        return (
            <div className="result col-sm-12 row justify-content-between align-items-center p-3 m-0">
                <div className="result_title col-sm-8 p-0 text-left">
                    {title}
                </div>
                <div className="result_value col-sm-4 p-0 text-right">
                    {value}
                </div>
            </div>
        );
    }
}


// -----
// Result export
export default Result;
