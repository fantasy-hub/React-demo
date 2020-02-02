import React from 'react';
import './App.css';
// import { Provider } from "react-redux";
// import store from './store/index'
// import Clock from './components/Clock/index'
// import Cart from './components/Cart/index'
// import AntdTest from './components/AntdTest/index'
// import CommonList from './components/CommonList/index'
// import Hoc from './components/Hoc/index';
// import Hos from './components/Hos/index'
// import Composition from './components/Composition/index'
// import HookTest from './components/HookTest/index'
// import ContextTest from './components/ContextTest.js/index'
// import WrapLoginForm from './components/WrapLoginForm/index'
// import CustomLoginForm from './components/CustomLoginForm/index2'
// import ReduxTest from './components/ReduxTest/index'
// import RouteSample from'./components/RouteSample/index'
import Test from './components/Test/index'

function App() {
    // const header = <h1>react</h1>;

    return (
        <div className="App">
            <div className="bg-img"></div>

            {/* 
            { header } */}

            {/* 时钟 */}
            {/* <Clock title="react"></Clock> */}

            {/* 条件与循环 */}
            {/* <Cart title="购物车"></Cart> */}

            {/* Antd引入 */}
            {/* <AntdTest></AntdTest> */}

            {/* 展示组件和容器组件 */}
            {/* <CommonList></CommonList> */}

            {/* 高阶组件 */}
            {/* <Hoc></Hoc> */}
            {/* <Hos></Hos> */}

            {/* 组件复合 */}
            {/* <Composition></Composition> */}

            {/* Hook */}
            {/* <HookTest></HookTest> */}

            {/* Context上下文 */}
            {/* <ContextTest></ContextTest> */}

            {/* 测试antd登陆表单 */}
            {/* <WrapLoginForm></WrapLoginForm> */}

            {/* 实现antd登陆表单组件设计 */}
            {/* <CustomLoginForm></CustomLoginForm> */}

            {/* Redux */}
            {/* <Provider store={store}>
                <ReduxTest></ReduxTest>
                <RouteSample></RouteSample>
            </Provider> */}

            {/* Test */}
            <Test></Test>
        </div>
    );
}

export default App