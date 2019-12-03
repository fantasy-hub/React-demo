import React, { Component } from 'react'
// import CommentMemo from './CommentMemo'
import CommentPure from './CommentPure'

export default class index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            comments: [],
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                comments: [
                    { body: "react is very good", author: "facebook" },
                    { body: "vue is very good", author: "youyuxi" }
                ]
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                { this.state.comments.map((item, i) => {
                    return (
                        // <CommentMemo key={i} {...item}></CommentMemo>
                        <CommentPure key={i} {...item}></CommentPure>
                    )
                }) }
            </div>
        )
    }
}

