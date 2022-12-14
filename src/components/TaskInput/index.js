import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add_Task } from '../../redux/actions/TaskActions';
import generateId from '../../utils/helper';
import AddedTask from '../AddedTask';
import styles from './index.module.css'

export default function TaskInput() {

  const [popup, setPopup] = useState(false);

  const [task, setTask] = useState("");

  const popupInOut = () => setPopup(!popup);


  const handleTask = (e) => setTask(e.target.value);

  const getTask = useSelector(state => state.taskReducer)

  const dispatch = useDispatch();

  const addTask = () => {

    const id = generateId();

    if (task === "") {
      alert("please type something")
      return
    }

    const data = {
      task: task,
      id: id
    }
    dispatch(add_Task(data))
    setPopup();
    setTask("");
  }

  return (
    <>
      <div className={styles.parent}>
        <main>
          {getTask.map((todo) => {
            return (
              <AddedTask key={todo.id} todo={todo} />
            )
          })}
        </main>
        <footer>
          <button onClick={popupInOut}>+</button>
        </footer>
      </div>
      {popup &&
        <EditTask popupInOut={popupInOut} task={task} addTask={addTask} handleTask={handleTask} />
      }
    </>
  )
}


function EditTask({ popupInOut, task, addTask, handleTask }) {
  const inputReference = useRef(null);

  useEffect(() => {
    inputReference.current.focus();
  }, []);

  return <div className={styles.popup}>
    <div className={styles.box}>
      <h3 onClick={popupInOut}>X</h3>
      <textarea value={task} onChange={handleTask} ref={inputReference} />
      <button onClick={addTask} className={styles.addBtn}>Add</button>
    </div>
  </div>
}

