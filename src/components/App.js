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
            <div className="main-wrapper container-fluid d-flex flex-column justify-content-between m-0 p-0">

                <Header />

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="row justify-content-between col-8">
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
export default App;