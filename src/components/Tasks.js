import React, {useState, useEffect} from 'react';
import { Table, Container, Button } from 'reactstrap';
import axios from 'axios'
import AddTasks  from './AddTasks'
import { Link } from 'react-router-dom'; 


const Tasks = () => {
  const [task, setTask] = useState([])
  const [res,setRes] = useState('')
  
  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/tasks')
    .then(response => {
      setTask(response.data)
    })
    .catch(error => {console.log(error)})
  },[])

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
         <td key={index}>{item.Id}</td>
         <td>{item.name}</td>
         <td>{item.description}</td>
         <td><Link to={"/EditTask/"+item.Id} className="btn btn-info   outline  btn-sm " >Edit Tasks</Link> <Button outline color="danger" size="sm" onClick={()=>onDelete(item.Id)} >Delete</Button>{' '}</td>
         </tr>
      ))}    
    </tbody>
  </Table>
  
  </Container>
  );
}

export default Tasks;