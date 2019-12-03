import React, { Component } from 'react'
// import WithMe from './WithMe'
import WithLog from './WithLog'


// @WithMe
@WithLog
class Base extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <div>
                {/* { this.props.stage } - { this.props.name } */}
                { this.props.stage }
            </div>
        )
    }
}

export default Base
