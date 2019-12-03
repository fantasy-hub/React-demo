import React, { useState, useEffect } from 'react'
import { Button, Input } from 'antd'

function SpaceLine() {
    const style = {
        height: '30px',
    }

    return (
        <div style={ style }></div>
    )
}



export default function HookTest() {
    // useState()
    const [count, setCount] = useState(0)
    const [fruit, setFruit] = useState('')
    const [fruits, setFruits] = useState(['apple', 'orange'])
    const [input, setInput] = useState('')

    // useEfect() 用于指定React更新DOM之后运行的回调
    useEffect(() => {
        document.title = `点击了${count}次`
    }, [count])
    //   如果仅打算执行一次，传递第二个参数为[]， 相当于componentDidMount
    useEffect(() => {
        console.log('object');
    }, [])

    // 自定义Hook use变量名
    const age = useAge();

    function useAge() {
        const [age, setAge] = useState(0)
        useEffect(() => {
            setTimeout(() => {
                // 模拟请求来的数据
                setAge(20)
            }, 5000)
        })
        return age
    }

    // 样式
    const inputStyle = {
        width: '200px',
    }

    // 逻辑函数
    const addFruit = () => {
        if (!input) return
        setFruits([...fruits, input])
        setInput('')
    }

    return (
        <div>
            <p>点击了{count}次</p>
            <Button type="primary" icon="zoom-in" shape="round" onClick={() => setCount(count + 1)}></Button>

            <SpaceLine></SpaceLine>

            <p>年龄：{age ? age : 'loading...'}</p>

            <SpaceLine></SpaceLine>

            <p>选择的水果：{fruit}</p>
            <div>
                <Input style={inputStyle} value={input} onChange={e => setInput(e.target.value)}></Input>
                <Button type="primary" onClick={addFruit}>添加水果</Button>
            </div>
            <div>
                {fruits.map((f, i) => (
                    <Button key={i} onClick={() => setFruit(f)}>{f}</Button>
                ))}
            </div>
        </div>
    )
}
