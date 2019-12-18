import React, {useState, useEffect} from 'react';
import axios from 'axios'
import AddTasks from './AddTasks'


const UsersSelect = (props)=>{
    const [user, setUsers] = useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/users ')
        .then(response => {
          setUsers(response.data)
        })
        .catch(error => {console.log(error)})
      },[])
 console.log(user)
    return(
        <AddTasks user = {user}/>
    );

}

export default UsersSelect