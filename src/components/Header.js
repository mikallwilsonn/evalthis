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
                    <div className="col-lg-8 row align-items-center">

                        <div className="col-md-6 row justify-content-start">
                            <h1 id="site_logo" className="h3 text-left">eval(this)</h1>
                        </div>

                        <div className="col-md-6 row">
                            <h2 className="h6 text-muted text-right">A Simple React-based tool for analyzing and modifying strings.</h2>
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
