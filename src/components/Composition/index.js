import React from 'react'

// Dialog作为容器不关心内容和逻辑 -> 等同于vue中slot
function Dialog(props) {
    return (
        <div style={ { border: `4px solid ${props.color || 'pink'}` } }>
            {props.children}
            <div className="footer">{props.footer}</div>
        </div>   
    )
}
function WelcomeDialog(props) {
    return (
        <Dialog {...props}>
            <h1>React太难了</h1>
        </Dialog>
    )
}

// Api调用
const Api = {
    getUser() {
        return { name: 'jerry', age: 20 }
    }
}
// 渲染函数的返回值
function Fetcher(props) {
    const user = Api[props.name]()

    return props.children(user)
}

// 过滤器：过滤出指定标签
function Filter({ children, type }) {
    return (
        <div>
            {React.Children.map(children, child => {
                if (child.type !== type) {
                    return 
                }
                return child
            })}
        </div>
    )
}

function RadioGroup(props) {
    return (
        <div>
            {React.Children.map(props.children, child => {
                return React.cloneElement(child, { name: props.name })
            })}
        </div>
    )
}

function Radio({ children, ...rest }) {
    return (
        <label>
            <input type="radio" {...rest}/>
            {children}
        </label>
    )
}
export default function index() {
    const footer = <button onClick={() => alert('ojbk')}>确定</button>

    return (
        <div>
            {/* <WelcomeDialog color="green" footer={footer}></WelcomeDialog> */}

            {/* <Fetcher name="getUser">
                { ({name, age}) => (
                    <p>{name}: {age}</p>
                ) }
            </Fetcher> */}

            {/* <Filter type="p">
                <h1>react</h1>
                <p>react很不错</p>
                <h1>vue</h1>
                <p>vue很不错</p>
            </Filter> */}

            <RadioGroup name="mvvm">
                <Radio value="vue">vue</Radio>
                <Radio value="react">react</Radio>
                <Radio value="angular">angular</Radio>
            </RadioGroup>
        </div>
    )
}
