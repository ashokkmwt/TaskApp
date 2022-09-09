import { ADD_TASK, UPDATE_TASK, REMOVE_TASK } from "./types"


const add_Task = (data) => {
    return {
        type: ADD_TASK,
        payload: data
    }
}

const update_Task = (data) => {
    return {
        type: UPDATE_TASK,
        payload: data
    }
}

const removeTaskAction = (data) => {
    return {
        type: REMOVE_TASK,
        payload: data
    }
}

export { add_Task, update_Task, removeTaskAction }