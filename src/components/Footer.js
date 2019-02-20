// ----
// Dependencies
import React, { Component } from 'react';


// ----
// Footer class
class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="container-fluid p-5">
                <div className="row justify-content-center">
                    <div className="col-auto text-muted">
                        @ 2019 eval(this)
                    </div>
                    <div className="col-auto text-muted">
                        Created by <a href="https://github.com/mikallwilsonn/" target="_blank" rel="noopener noreferrer">@mikallwilsonn</a>
                    </div>
                </div>
            </footer>
        );
    }
}


// ----
// Footer export
export default Footer;