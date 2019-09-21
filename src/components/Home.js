import React, { Component } from "react";
import { Button, WhiteSpace } from 'antd-mobile';
import Detail from "./Detail";
require("@/assets/css/home.less");

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: "我是父组件的值"
        }

        this.addStateVal = this.addStateVal.bind(this);
        this.func = this.func.bind(this);
    }

    addStateVal() {
        let addMum = (this.state.num);
        this.setState(state => (
            {
                num: addMum + 1
            }
        ))
    }

    func(data) {
        this.setState(state => ({
            num: data
        }), () => {
            console.log(this.state.num)
        })
    }

    render() {
        return (
            <div className="home" >
                <Button type="primary" onClick={
                    this.addStateVal
                }>Add state value</Button> <WhiteSpace />
                <div>wellCome To Home</div>
                <p>{this.state.num}</p>
                {/*  <div>
                    <a href="#/Detail">to Detail</a>
                </div> */}
                <div>
                    <button onClick={() => this.props.history.push(`/detail/${this.state.num}`)}>通过函数跳转detail</button>
                </div>
                <hr />
                <Detail num={this.state.num} fnc={this.func} />
            </div >
        )
    }
}

export default Home;