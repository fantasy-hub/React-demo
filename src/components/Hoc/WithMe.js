import React from 'react'
import WithLog from './WithLog'
// import Base from './Base'

export default function WithMe(Comp) {
    const name = '高阶组件'
    console.log('withme');

    return (
        <div>
            <WithLog { ...this.props } name={ name }></WithLog>
        </div>
    )
}
