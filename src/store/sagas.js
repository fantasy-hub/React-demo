import { call, put, takeEvery } from 'redux-saga/effects'

// 异步请求
const UserService = {
    login(name) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (name === 'lida') {
                    resolve({ id: 1, name: 'lida', age: 27 })
                } else {
                    reject('用户名错误')
                }
            }, 1000)
        })
    }
}

// saga 异步处理逻辑。saga内部逻辑的Action
function* AsyncLogin(action) {
    try {
        yield put({ type: 'request_login' })
        const result = yield call(UserService.login, action.name)

        yield put({ type: 'success_login', result })
    } catch(error) {
        yield put({ type: 'failed_login', error })
    }
}

// 全局监听saga Action事件
function* sagaEvent() {
    yield takeEvery('login', AsyncLogin)
}
export default sagaEvent