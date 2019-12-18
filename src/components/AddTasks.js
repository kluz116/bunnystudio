import React, {useState,useEffect} from 'react'
import { Button,Form,Container,Col,Row,Input,FormGroup } from 'reactstrap';
import axios from 'axios'

const AddTasks = (props) => {

    const[description_value,setDescription]= useState('');
    const[name_value,setName]= useState('');
    const [res,setRes] = useState('')
    const [user, setUsers] = useState([])

    const data = {
        description:description_value,
        User_id:name_value
      }
      console.log(data)
      useEffect(()=>{
        axios.get('http://127.0.0.1:5000/users ')
        .then(response => {
          setUsers(response.data)
        })
        .catch(error => {console.log(error)})
      },[])
    const handleAdd= (e)=>{
        e.preventDefault()
        axios({
          headers: {
            'Content-Type': 'application/json',
        } ,
          method:'post',
          url:'http://127.0.0.1:5000/add_task ',
          data:JSON.stringify(data)
        }).then(response=>{
          setRes(response.data)
        }).catch(error=>{
          console.log(error)
        })
  
      }


  return (
      
    <Container>
    <Row>
         <Col>
         <p>{res}</p>
            <Form inline  className="App-Movie"  onSubmit={handleAdd}>
        
                <FormGroup className="mb-4 mr-sm-4 mb-sm-0" >
                <Input type="text" value={description_value} onChange={e=> setDescription(e.target.value)} placeholder="Task" />
                </FormGroup>
                <FormGroup>
                      <Input type="select" value={name_value} onChange={e=> setName(e.target.value)}>
                        {user.map((user_item)=>(
                         
                          <option value={user_item.id} key={user_item.id} >{user_item.name}</option>
                          
                        ) )
                        }
                      </Input>
                 </FormGroup>
                <Button type='submit' outline color="success" size="sm" >Add Task</Button>
            </Form>
       </Col>
    </Row>
    </Container>
    
  );
}

export default AddTasks;