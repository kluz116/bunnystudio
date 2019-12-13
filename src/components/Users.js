import React, {useState, useEffect} from 'react';
import { Table, Button , Container} from 'reactstrap';
import NavBar from './Nav'
import axios from 'axios'
import UserList from './UserList'
import EditUser from './EditUser'
import AddUser from './addUser'

const Users = () => {
  const [user, setUsers] = useState([])
  const [userdetails, setUsersDetails] = useState([])
  const [userTask, setUserTask] = useState([])
  const [modal, setModal] = useState(false);

  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/users ')
    .then(response => {
      setUsers(response.data)
    })
    .catch(error => {console.log(error)})
  },[])

  const onDelete = id =>{
    axios.get('http://127.0.0.1:5000/delete/'+id)
    .then(response =>{
        console.log(response.data)    
    })
    .catch(error =>{
        console.log(error)
    })
  }

    const onViewUser = id =>{
      axios.get('http://127.0.0.1:5000/usertask/'+id)
      .then(response =>{
      
          setModal(true);
          setUserTask(response.data)    
      })
      .catch(error =>{
          console.log(error)
      })
    }

    const onEditUser = id =>{
      axios.get('http://127.0.0.1:5000/userdetails/'+id)
      .then(response =>{
          setModal(true);
          setUsersDetails(...response.data)    
      })
      .catch(error =>{
          console.log(error)
      })
    }


  
  return (
    <div>
      <NavBar/>
    
      <Container>
      <AddUser/>
       <br></br>

      <Table striped>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Action</th>
      
     
        </tr>
      </thead>
      <tbody>
       
        {user.map((item,index)=>(
           <tr>
            <td>{item.id}</td>
           <td>{item.name}</td>
           <td><Button outline color="success" size="sm" onClick={()=>onViewUser(item.id)} >View Tasks</Button>{' '} <Button outline color="danger" size="sm" onClick={()=>onDelete(item.id)} >Delete</Button>{' '} <Button outline color="primary" size="sm" onClick={()=>onEditUser(item.id)}>Edit</Button>{' '}</td>
           </tr>
        ))}
        
      </tbody>
    </Table>
  
    <UserList modal = {modal} userTask = {userTask}/>  
    <EditUser modal = {modal} userdetails = {userdetails}/>  
    </Container>
    </div>
   

  );
}

export default Users;
