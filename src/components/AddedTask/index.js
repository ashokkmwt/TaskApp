import React, { useState } from 'react'
import { removeTaskAction, update_Task } from '../../redux/actions/TaskActions';
import styles from './index.module.css'
import { useDispatch } from 'react-redux/es/exports';

export default function AddedTask(props) {
    
    const [readonly, setReadonly] = useState(true);

    const [newTask, setNewTask] = useState(props.todo.task)

    const dispatch = useDispatch();

    const updateTask = () => {
        setReadonly(!readonly);
        const data = {
            oldTask: props.todo.task,
            newTask: newTask,
            id: props.todo.id
        }
        dispatch(update_Task(data));
    }

    const handlerTextarea = (e) => setNewTask(e.target.value);

    const removeTask = () => dispatch(removeTaskAction(props.todo.id))

    return (
        <div className={styles.taskContainer}>
            <input onChange={handlerTextarea} readOnly={readonly} value={newTask} />
            <div className={styles.buttonBar}>
                <button onClick={updateTask}>{readonly ? "Edit" : "Save"}</button>
                <button onClick={removeTask}>Delete</button>
            </div>
        </div>
    )
}
