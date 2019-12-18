import React, {useState,useEffect} from 'react'
import { Table } from 'reactstrap';
import { useParams} from "react-router";
import axios from 'axios'

const UserList = (props)=>{
  const [userTask, setUserTask] = useState([])
  let { id } = useParams();

  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/usertask/'+id)
    .then(response =>{
        setUserTask(response.data)    
    })
    .catch(error =>{
        console.log(error)
    })
   })

    return (
            <div>
       
                <Table striped>
                  <thead>
                    <tr>
                      <th>TaskID</th>
                      <th>Name</th>
                      <th>Todo</th>
                      
                
                    </tr>
                  </thead>
                  <tbody>
                  
                    {userTask.map((item,index)=>(
                      <tr>
                        <td>{item.Id}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                  
                      </tr>
                    ))}
                    
                  </tbody>
                </Table>
              </div>
        )
}
export default UserList