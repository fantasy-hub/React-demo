import React from 'react'
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../store/user'
import { Button } from 'antd'

const TestLogin = connect(
    // mapStateToProps 连接的state
    state => {
        // console.log(state, 'state');
        return {
            isLogin: state.user.isLogin,
            loading: state.user.loading,
        }
    },
    // mapDispatchToProps 连接的dispatch
    { login }
)(function ({ isLogin, loading, login }) {
    if (isLogin) {
        return (<h3>登陆了</h3>)
    } else {
        return (
            <div>
                <Button onClick={ login }>{ loading ? '登陆中...' : '登陆' }</Button>
            </div>
        )
    }
})

function Home() {
    return (
        <div>
            <h3>课程列表</h3>
            <ul>
                <li><Link to='/detail/web'>Web架构师</Link></li>
                <li><Link to='/detail/node'>Node开发</Link></li>
            </ul>
        </div>
    )
}

function About() {
    return (
        <div>
            <h3>个人中心</h3>
            <div>
                <Link to='/about/me'><Button>个人信息</Button></Link>
                <Link to='/about/order'><Button>订单</Button></Link>
            </div>

            <Switch>
                <Route path='/about/me' component={() => (<div>me</div>)}></Route>
                <Route path='/about/order' component={() => (<div>order</div>)}></Route>
                {/* "/about" 路径下默认展示 "/about/me"组件 */}
                <Redirect to='/about/me'></Redirect>
            </Switch>
        </div>
    )
}

function Detail(props) {
    console.log(props);
    // props 路由组件传入的路由参数： history location match
    return (
        <div>
            <hr/>
            当前课程：{props.match.params.course}
            <Button size='small' onClick={() => props.history.goBack()}>Back</Button>
        </div>
    )
}

// 路由守卫，用法：<RouteGuard component={Abuout} path='/about'></RouteGuard>
const RouteGuardAbout = connect(
    state => ({
        isLogin: state.user.isLogin
    })
)(function ({ component: Comp, isLogin, ...rest}) {
    return (
        <Route
            {...rest}
            render={
                props => (
                    isLogin ? (<Comp></Comp>) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { redirect: props.location.pathname }
                            }}
                        >
                        </Redirect>
                    )
                )
            }
        >
        </Route>
    )
})

const Login = connect(
    state => ({
        isLogin: state.user.isLogin,
        loading: state.user.loading,
    }),
    { login }
)(function ({ location, isLogin, loading, login }) {
    // console.log(location, 'location');
    const redirect = location.state.redirect || '/'

    if (isLogin) {
        return (<Redirect to={redirect}></Redirect>)
    }

    return (
        <div>
            <p>用户登陆</p>
            <hr />
            <Button type='primary' onClick={login} disabled={loading}>
                {loading ? '登陆中...' : '登陆'}
            </Button>
        </div>
    )
})

function NoMatch(params) {
    return (
        <div>
            找不到要访问的：{params.location.pathname}页面
        </div>
    )
}

export default function RouteSample() {
    return (
        <div>
            {/* <TestLogin></TestLogin> */}
            <BrowserRouter>
                {/* 导航条 */}
                <div>
                    <Link to='/'><Button>首页</Button></Link>
                    <Link to="/about"><Button>关于</Button></Link>
                </div>

                {/* 路由配置：路由就是组件。路由匹配默认是包容模式，所以会默认渲染跟路径 */}
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    {/* 路由守卫 */}
                    <RouteGuardAbout path='/about' component={About}></RouteGuardAbout>
                    <Route path='/login' component={Login}></Route>
                    {/* 嵌套路由 */}
                    <Route path='/detail/:course' component={Detail}></Route>
                    {/* 404，没有path，必然匹配 */}
                    <Route component={NoMatch}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
