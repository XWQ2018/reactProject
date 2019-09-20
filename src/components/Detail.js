import React, { Component } from "react";

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 3
        }
    }

    addStateVal() {

    }
    /* 初始化函数 */
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div className="detail">
                <div>wellCome To Detail</div>
                <p>{this.state.num}</p>
                <div>
                    <a href="#/Home">back home</a>
                </div>
                <div>
                    <button onClick={() => this.props.history.push({
                        pathname: "/home"
                    })}>通过函数跳转home</button>
                </div>
            </div>
        )
    }
}

export default Detail;