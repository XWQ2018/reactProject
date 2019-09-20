import React, { Component } from "react";
import { Button, WhiteSpace } from 'antd-mobile';
require("@/assets/css/home.less");

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }

        this.addStateVal = this.addStateVal.bind(this);
    }

    addStateVal() {
        let addMum = (this.state.num) + 5;
        this.setState(state => (
            {
                num: addMum
            }
        ))
    }

    render() {
        return (
            <div className="home" >
                <Button type="primary" onClick={
                    this.addStateVal
                }>primary</Button> <WhiteSpace />
                <div>wellCome To Home</div>
                <p>{this.state.num}</p>
                <div>
                    <a href="#/Detail">to Detail</a>
                </div>
                <div>
                    <button onClick={() => this.props.history.push(`/detail/${this.state.num}`)}>通过函数跳转detail</button>
                </div>
            </div >
        )
    }
}

export default Home;