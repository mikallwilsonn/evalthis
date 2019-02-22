// ----
// Dependencies
import React, { Component } from 'react';


// ----
// Child Components
import Header from './Header';
import Content from './Content';
import Results from './Results';
import Footer from './Footer';


// ----
// App Class
class App extends Component {
    render() {
        return (
            <div className="main-wrapper col-sm-12 d-flex flex-column justify-content-between m-0 p-0">

                <Header />

                <div className="col-sm-12">
                    <div className="row justify-content-center pt-5 pb-5">
                        <div className="row justify-content-between col-md-8">
                            <Content />
                            <Results />
                        </div>
                    </div>
                </div>

                <Footer />

            </div>
        );
    }
}


// ----
// Export
export default  App;
