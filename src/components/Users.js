import React, {useState, useEffect} from 'react';
import { Table, Button , Container} from 'reactstrap';
import { Link } from 'react-router-dom'; 
import axios from 'axios'
import AddUser from './addUser'

const Users = () => {
  const [user, setUsers] = useState([])

  

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

  return (
    <div>
    
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
           <td><Link to={"/UserList/"+item.id} className="btn btn-info   outline  btn-sm " >Tasks</Link> <Button outline color="danger" size="sm" onClick={()=>onDelete(item.id)} >Delete</Button>{' '}     <Link to={"/EditUser/"+item.id} className="btn btn-success   outline  btn-sm " >Edit</Link>  </td>
           </tr>
        ))}
        
      </tbody>
    </Table>
  
    </Container>
    </div>
   

  );
}

export default Users;
