import React, {useState, useEffect} from 'react';
import { Table, Container, Button } from 'reactstrap';
import axios from 'axios'
import AddTasks  from './AddTasks'
import EditTask from './EditTask';

const Tasks = () => {
  const [task, setTask] = useState([])
  const [taskDetails, setTaskDetails] = useState([])
  const [res,setRes] = useState('')
  const [modal, setModal] = useState(false);
  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/tasks')
    .then(response => {
      setTask(response.data)
    })
    .catch(error => {console.log(error)})
  },[])

  const onEditTask = id =>{
    axios.get('http://127.0.0.1:5000/tasks_view/'+id)
    .then(response =>{
      setModal(true);
      console.log(response.data)
        setTaskDetails(...response.data)    
       
    })
    .catch(error =>{
        console.log(error)
    })
  }
  const onDelete = id =>{
    axios.get('http://127.0.0.1:5000/delete_task/'+id)
    .then(response =>{
      setRes(response.data)
    })
    .catch(error =>{
        console.log(error)
    })
  }

  return (
    <Container>
    <AddTasks/>
    <br></br>
    <Table striped>
    <p>{res}</p>
    <thead>
      <tr>
        <th>TaskID</th>
        <th>User</th>
        <th>Todo</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {task.map((item,index)=>(
         <tr>
          <td>{item.Id}</td>
         <td>{item.name}</td>
         <td>{item.description}</td>
         <td><Button outline color="success" size="sm" onClick={()=>onEditTask(item.Id)}>Edit Task</Button>{' '} <Button outline color="danger" size="sm" onClick={()=>onDelete(item.id)} >Delete</Button>{' '}</td>
         </tr>
      ))}    
    </tbody>
  </Table>
  <EditTask modal = {modal} taskDetails = {taskDetails} onEditTask ={onEditTask}/>  
  </Container>
  );
}

export default Tasks;