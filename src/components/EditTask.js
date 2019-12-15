import React, {useState,useEffect} from 'react'
import { Button,Form,Input,FormGroup,Row,Col} from 'reactstrap';
import axios from 'axios'
import { useParams} from "react-router";

const EditTask = (props)=>{
  let { id } = useParams();
  
    const [newname,setDescription]= useState('') 
    const [taskDetails, setTaskDetails] = useState([])

    const data = {
      id:id,
      name:newname
    }

    const handleEdit= (e)=>{
      e.preventDefault()
      axios({
        headers: {
          'Content-Type': 'application/json',
      } ,
        method:'post',
        url:'http://127.0.0.1:5000/update ',
        data:JSON.stringify(data)
      }).then(response=>{
        console.log(response)
      }).catch(error=>{
        console.log(error)
      })

    }

    useEffect(()=>{
      axios.get('http://127.0.0.1:5000/tasks_view/'+id)
      .then(response =>{
        console.log(response.data)
          setTaskDetails(...response.data)    
         
      },[])
      .catch(error =>{
          console.log(error)
      })
     })
  
    
    return (
      <Row>
      <Col xs="4"></Col>
      <Col xs="4">
             
                  <Form onSubmit = {handleEdit}>
                    <h4>Edit Task</h4>
                    <FormGroup>
                      <Input type="text" value={newname}  onChange={e=> setDescription(e.target.value)} placeholder={taskDetails.description} />
                    </FormGroup>
                  
                     <FormGroup>
                      <Input type="select" name="select" value={taskDetails.state}>
                        <option>{taskDetails.state}</option>
                        <option>done</option>
                      </Input>
                    </FormGroup>
         
              
                    <Button type='submit' outline color="success" size="sm" >Edit Task</Button>
                  </Form>
  
                
                  </Col>
                <Col xs="4"></Col>
              </Row>

              
        )
}

export default EditTask