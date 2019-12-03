// Actions
export const add = () => ({ type: 'ADD' })
export const minus = () => ({ type: 'MINUS' })
export const asyncAdd = () => dispatch => {
    setTimeout(() => {
        dispatch(add());
    }, 1000)
}

export const count = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'MINUS':
            return state - 1;
        default:
            return state;
    }
}
