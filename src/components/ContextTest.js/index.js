import React, { Component, useContext } from 'react'

// 创建上下文
const content = React.createContext()
const { Provider, Consumer } = content

// 使用Consumer
function Child1(props) {
    return (
        <div>Child1: {props.foo}</div>
    )
}

// 使用hook消费
function Child2() {
    const insideContent = useContext(content)

    return (
        <div>
            Child2: {insideContent.foo}
        </div>
    )
}

// 使用Class指定 静态contextType
class Child3 extends Component {
    // 设置静态属性 通知编译器获取上下文中数据 并赋值给this.context
    static contextType = content

    render() {
        return (
            <div>
                Child3: {this.context.foo}
            </div>
        )
    }
}


export default function ContextTest() {
    return (
        <div>
            <Provider value={{ foo: 'bar' }}>
                <Consumer>
                    {value => <Child1 {...value}></Child1>}
                </Consumer>

                <Child2></Child2>
                
                <Child3></Child3>
            </Provider>
        </div>
    )
}
