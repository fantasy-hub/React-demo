import React from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { add, minus, asyncAdd } from '../../store/count'

const mapStateToProps = state => ({ count: state.count })
const mapDispatchToProps = { add, minus, asyncAdd }
    
function ReduxTest({ count, add, minus, asyncAdd }) {
    return (
        <div>
            <h3>当前数值: { count }</h3>
            <Button onClick={minus}>minus</Button>
            <Button onClick={add}>add</Button>
            <Button onClick={asyncAdd}>asyncAdd</Button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest)
