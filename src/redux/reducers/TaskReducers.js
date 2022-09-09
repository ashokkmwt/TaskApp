import { ADD_TASK, REMOVE_TASK, UPDATE_TASK } from "../actions/types";


const initialState = [];

const taskReducer = (state = initialState, action) => {

    let newState = [...state];

    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload]

        case UPDATE_TASK:
            newState = newState.map((data) => {
                if (data.id === action.payload.id) return { ...data, task: action.payload.newTask }
                return data
            })
            return newState;

        case REMOVE_TASK:
            newState = newState.filter(data => data.id !== action.payload)
            return newState
            
        default:
            return state
    }
}

export default taskReducer