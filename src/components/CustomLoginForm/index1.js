import React, { Component } from 'react'
import { Input, Button } from 'antd'

// 创建一个高阶组件扩展现有组件：表单、事件处理、数据收集、校验
function LoginFormCreate(Comp) {
    return class extends Component {
        constructor(props) {
            super(props)
        
            this.state = {}
            this.options = {}
        }

        handleChange = (e) => {
            const { name, value } = e.target

            this.setState({
                [name]: value
            })
        }

        getFieldDecorator = (field, option) => {
            this.options[field] = option

            return InputComp => (
                <div>
                    {React.cloneElement(InputComp, {
                        name: field,
                        value: this.state[field] || '',
                        onChange: this.handleChange,
                    })}
                </div>
            )
        }
        
        render() {
            return <Comp getFieldDecorator={this.getFieldDecorator}></Comp>
        }
    }
}

@LoginFormCreate
class CustomLoginForm extends Component {
    render() {
        const { getFieldDecorator } = this.props

        return (
            <div>
                {getFieldDecorator('username', {
                    rules:[{require: true, message: '用户名必填'}]
                })(<Input></Input>)}
                <Button>登陆</Button>
            </div>
        )
    }
}

export default CustomLoginForm
