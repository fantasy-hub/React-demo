import React, { Component } from 'react'
import './index.scss'

export default class Clock extends Component {
    timer = null

    constructor(props) {
        super(props)
    
        this.state = {
            date: new Date(),
            list: [
                { id: 1, name: '首页' },
                { id: 2, name: '关注' },
                { id: 3, name: '我的' },
            ]
        }
    }
    
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }

    componentWillUnmount() {
        this.timer = null
    }

    render() {
        return (
            <div>
                <h1>北京时间：{ this.state.date.toLocaleTimeString() }</h1>
                { this.props.title && <h2 className="title">{ this.props.title }</h2>}

                <ul>
                    { this.state.list.map((item, i) => (
                        <li key={ item.id }>{ item.name }</li>
                    )) }
                </ul>
            </div>
        )
    }
}
