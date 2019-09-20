import React, { Component } from "react";

import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css';

class Home extends Component {
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
            <div className="home">
                <Button type="primary" onClick={() => console.log(99999)}>primary</Button><WhiteSpace />
                <div>wellCome To Home</div>
                <p>{this.state.num}</p>
                <div>
                    <a href="#/Detail">to Detail</a>
                </div>
                <div>
                    <button onClick={() => this.props.history.push({
                        pathname: '/detail',
                        params: {
                            state: "6666"
                        }
                    })}>通过函数跳转detail</button>
                </div>
            </div>
        )
    }
}

export default Home;