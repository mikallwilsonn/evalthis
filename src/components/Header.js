// ----
// Dependencies
import React, { Component } from 'react';


// ----
// Header class
class Header extends Component {
    render() {
        return (
            <header id="header" className="container-fluid pb-3 pt-4 bg-white">
                <div className="row justify-content-center">
                    <div className="col-8 row align-items-center">

                        <div className="col-6 row justify-content-start">
                            <h1 id="site_logo" className="h3">eval(this)</h1>
                        </div>

                        <div className=" col-6 row">

                        </div>

                    </div>
                </div>
            </header>
        );
    }
}


// ----
// Header Export
export default Header;
