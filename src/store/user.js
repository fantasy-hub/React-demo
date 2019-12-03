const REQUEST_LOGIN = 'REQUEST_LOGIN'
const DONE_LOGIN = 'DONE_LOGIN'

export const login = () => dispatch => {
    dispatch({ type: REQUEST_LOGIN })

    setTimeout(() => {
        dispatch({ type: DONE_LOGIN, payload: [1,2,3]})
    }, 2000)
}

const initialState = {
    isLogin: false,
    loading: false,
}
export const user = (state = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST_LOGIN:
            return {
                isLogin: false,
                loading: true,
            }
        case DONE_LOGIN:
            return Object.assign({}, { isLogin: true, loading: false }, { arr: payload })
        default:
            return state
    }
}
