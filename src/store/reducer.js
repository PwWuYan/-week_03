import { combineReducers } from 'redux'

function data(state = [], action) {
    switch (action.type) {
        case "GET_LIST":
            return action.data
        default:
            return state
    }
}

function list(state = [], action) {
    switch (action.type) {
        case "GET_CLASSLIST":
            return action.data
        default:
            return state
    }
}

function arr(state = [], action) {
    switch (action.type) {
        case "SET_ARR":
            return action.data

        default:
            return state
    }
}

function index(state = 0, action) {
    switch (action.type) {
        case "SET_INDEX":
            return action.data

        default:
            return state
    }
}
const reducer = combineReducers({
    data,
    list,
    arr,
    index
})

export default reducer