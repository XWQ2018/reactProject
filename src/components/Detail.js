import React, { Component } from "react";

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: "我是来自子组件state的数据"
        }
        this.testFnc = this.testFnc.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    /* 
    componentWillMount() {
        console.log('componentWillMount----组件将要挂载到页面的时刻')
    }

    componentDidMount() {
        console.log('componentDidMount----组件挂载完成的时刻执行')
    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate---组件发生改变前执行')
        return true
    }

    //shouldComponentUpdate返回true才会被执行。
    componentWillUpdate() {
        console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate----组件更新之后执行')
    }

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }


    //当组件从页面中删除的时候执行
    componentWillUnmount() {
        console.log('child - componentWillUnmount')
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }

    }
    
    
    */

    shouldComponentUpdate(nextStates) {/* 控制组件是否重新渲染,props有变化就触发组件更新 */
        console.log('shouldComponentUpdate', nextStates)
        if (this.state.num === nextStates.num) {
            return false;
        }
        return true;
    }

    componentWillReceiveProps(nextProps) { // 父组件重传props时就会调用这个方法
        console.log('componentWillReceiveProps', nextProps)
        this.setState({ someThings: nextProps.someThings });
        console.log(this.state)
    }

    /* 组件的挂载(Mounting)阶段的第三个时期,组件挂载到DOM后调用，且只会被调用一次。
    此阶段分为componentWillMount，render，componentDidMount三个时期。
    componentWillMount  =>挂载前调用，只会调用一次。s
    */
    componentDidMount() {
        console.log(6666)
    }
    testFnc() {
        console.log("Detail组件", this.props)
        /* 调用父组件传过来的方法，并执行传入参数 */
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