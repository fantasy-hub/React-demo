import React from 'react'
import Base from './Base'

export default function WithLog(props) {
    console.log('withlog');
    console.log(this.props);
    return (
        <div>
            <Base { ...this.props }></Base>
        </div>
    )
}
