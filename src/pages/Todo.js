import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Todo = () => {

  const [toDo, setToDo] = useState([
    // {id: 1, title: "task 1", assignedTo: "manager", status: false},
    // {id: 2, title: "task 2", assignedTo: "employee", status: false}
  ]);

  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  const addTask = () => {
    if(newTask){
      let num = toDo.length + 1;
      let newEntry = {id: num, title: newTask, assignedTo: "testing", status: false}
      setToDo([...toDo, newEntry]);
      setNewTask('');
    };
  };

  const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id);
    setToDo(newTasks);
  };

  const changeTaskState = (id) => {
    let newTask = toDo.map( task =>{
      if(task.id === id){
        return({...task, status: !task.status});
      };
      return task;
    });
    setToDo(newTask);
  };

  const cancelUpdate = () => {
    setUpdateData('');
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      assignedTo: updateData.assignedTo,
      status: updateData.status ? true : false
    };
    setUpdateData(newEntry);
  };

  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  };

  const changeAssignment = (e) => {

  };

  return(
    <div className="container App">
      <br /><br />
      <h2>To Do List</h2>
      <br /><br />
      
      {updateData && updateData ? (
        <>
          {/* update task */}
          <div className="row">
            <div className="col">
              <input className="form-control form-control-lg"
              value={updateData && updateData.title}
              onChange={(e) => changeTask(e)}/>
            </div>
            <div className="col-auto">
              <button className="btn btn-lg btn-success mr-20"
              onClick={updateTask}>Update</button>
              <button className="btn btn-lg btn-warning"
              onClick={cancelUpdate}>Cancel</button>
            </div>
          </div>
          <br />
        </>
      ) : (
        <>
          {/* new task */}
          <div className="row">
            <div className="col">
              <input className="form-control form-control-lg" 
              value={newTask}
              onChange={ (e) => setNewTask(e.target.value)}/>
            </div>
            <div className="col-auto">
              <button className="btn btn-lg btn-success"
              onClick={addTask}>Add Task</button>
            </div>
          </div>
          <br /> 
        </>
      )}

      {/* Display Todos */}

      {toDo && toDo.length ? '' : 'No tasks added...'}

      {toDo && toDo
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((task, index) => {
          return(
            <React.Fragment key={task.id}>

              <div className="col taskBg">
                <div className={task.status ? 'done' : ''}>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskText">{task.title}</span>
                  <span className="taskText">Assigned: {task.assignedTo}</span>
                </div>
                <div className="iconsWrap">
                  <span title="Completed / Not Completed"
                  onClick={(e) => changeTaskState(task.id)}><FontAwesomeIcon icon={faCircleCheck}/></span>
                  {task.status ? null : (
                    <span title="Edit"
                    onClick={() => setUpdateData({
                      id: task.id,
                      title: task.title,
                      assignedTo: task.assignedTo,
                      status: task.status ? true : false,
                    })}><FontAwesomeIcon icon={faPen}/></span>
                  )}
                  <span title="Assignment"
                  onClick={() => changeAssignment(task.assignedTo)}><FontAwesomeIcon icon={faCircleUser}/></span>
                  <span title="Delete"
                  onClick={() => deleteTask(task.id)}><FontAwesomeIcon icon={faTrashCan}/></span>
                </div>
              </div>

            </React.Fragment>
          )
        })  
      }

    </div>
  );
};

export default Todo;