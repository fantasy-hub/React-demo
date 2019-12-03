/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import { Input, Button, Alert } from 'antd'

// 创建一个高阶组件扩展现有组件：表单、事件处理、数据收集、校验
function LoginFormCreate(Comp) {
    return class extends Component {
        constructor(props) {
            super(props)
        
            this.state = {}
            this.options = {}           // 存放指定表单名称的验证规则
        }

        handleChange = (e) => {
            const { name, value } = e.target

            this.setState({
                [name]: value
            }, () => {
                this.validataField(name)   
            })
        }
        // 校验函数
        validataField = field => {
            const rules = this.options[field].rules

            const result = !rules.some(r => {
                if (r.require) {
                    if (!this.state[field]) {
                        this.setState({
                            [field + 'Message']: r.message
                        })
                        return true;
                    }
                }
            })
            if (result) {
                this.setState({
                    [field + 'Message']: ''
                })
            }
            return result
        }
        // 校验提交
        validate = cb => {
            const results = Object.keys(this.options).map(field => this.validataField(field))
            const pass = results.every(item => item === true)
            
            return cb(pass, this.state)
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

                    {this.state[field + 'Message'] && (
                        <div style={{color: 'red'}}>{this.state[field + 'Message']}</div>
                    )}
                </div>
            )
        }

        render() {
            return <Comp getFieldDecorator={this.getFieldDecorator} validate={this.validate}></Comp>
        }
    }
}

@LoginFormCreate
class CustomLoginForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {}
    }
    

    onSubmit = () => {
        this.props.validate((isvalid, state) => {
            if (isvalid) {
                // 提交登陆
                console.log('登陆信息', state);
            } else {
                console.log('fail');
                this.setState({
                    showAlert: true
                })
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props

        return (
            <div>
                {this.state.showAlert &&  <Alert message="提交失败" type="warning" closeText="Close Now" />}

                {getFieldDecorator('username', {
                    rules:[{require: true, message: '用户名必填'}]
                })(<Input></Input>)}
                {getFieldDecorator('password', {
                    rules:[{require: true, message: '密码必填'}]
                })(<Input type="password"></Input>)}
                <Button onClick={this.onSubmit}>登陆</Button>
            </div>
        )
    }
}

export default CustomLoginForm
