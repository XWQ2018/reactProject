import React, { Component } from 'react';
import Router from "../router/router";

class App extends Component {

    render() {
        let containerStyle = {
            padding: "10px"
        };
        return (
            <div style={containerStyle}>
                <Router />
            </div>
        )
    }

}

export default App;
