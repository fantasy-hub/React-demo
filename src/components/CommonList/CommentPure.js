import React, { PureComponent } from 'react'

export default class CommentPure extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    componentDidMount() {
        
    }
    
    
    render() {
        console.log('执行次数');

        return (
            <div>
                <p>{ this.props.body }</p>
                <p>{ this.props.author }</p>
            </div>
        )
    }
}
