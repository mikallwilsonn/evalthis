// ----
// Dependencies
import React, { Component } from 'react';


// ----
// Result class
class SocialResult extends Component {
    render() {
        const { title, value, limit } = this.props;

        const progress = ( value / limit ) * 100;

        return (
            <div className="result col-sm-12 row justify-content-between align-items-center p-3 m-0">
                <div className="result_title col-sm-8 p-0 text-left">
                    {title}
                </div>
                <div className="result_value col-sm-4 p-0 text-right">
                    {value} / {limit}
                </div>
                <div className="col-sm-12 p-0 mt-1">
                    <div className="progress p-0">
                        <div 
                            className={`progress-bar ${progress > 100 ? 'bg-danger' : 'bg-primary'}`} 
                            style={{ width: `${progress}%` }}
                            role="progressbar" 
                            aria-valuenow={progress} 
                            aria-valuemin="0" 
                            aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        );
    }
}


// -----
// Result export
export default SocialResult;