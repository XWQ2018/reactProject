import React, { Component } from "react";

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: "我是子组件state的数据"
        }
        this.testFnc = this.testFnc.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    // shouldComponentUpdate(nextProps) {/* 控制组件的刷新 */
    // console.log('shouldComponentUpdate', nextProps)
    // }

    // componentWillReceiveProps(nextProps) { // 父组件重传props时就会调用这个方法
    // console.log('componentWillReceiveProps', nextProps)
    // this.setState({ someThings: nextProps.someThings });
    // }

    /* 组件的挂载(Mounting)阶段的第三个时期,组件挂载到DOM后调用，且只会被调用一次。
    此阶段分为componentWillMount，render，componentDidMount三个时期。
    componentWillMount  =>挂载前调用，只会调用一次。s
    */
    componentDidMount() {
        console.log(6666)
    }
    testFnc() {
        console.log("Detail组件", this.props)
        this.props.fnc(this.state.num)

    }
    render() {
        return (
            <div className="detail" style={{ marginTop: '20px', fontSize: '18px' }}>
                <div>我是子组件</div>
                <p>父组件传过来的值：{this.props.num}</p>
                {/*  <p>{this.state.num}</p>
                <div>
                    <a href="#/Home">back home</a>
                </div> */}
                <div>
                    <button onClick={this.testFnc}>传值给父组件Home</button>
                </div>
            </div>
        )
    }
}

export default Detail;