import { React, Component } from "react";
import ReactDom from "react-dom";

class onceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }
    }

    addStateVal() {

    }

    render() {
        return (
            <div>
                <div>hello world</div>
                <p>{this.state.num}</p>
            </div>
        )
    }
}

ReactDom.render(<onceComponent />, document.getElementById('root'));