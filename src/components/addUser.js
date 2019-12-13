import React, {useState} from 'react'
import { Button,Form,Container,Col,Row,Input,FormGroup } from 'reactstrap';
import axios from 'axios'

const AddUser = (props) => {


    const[name_value,setName]= useState('');
    const [res,setRes] = useState('')
    const data = {
        name:name_value
      }

    console.log(name_value)

    const handleAdd= (e)=>{
        e.preventDefault()
        axios({
          headers: {
            'Content-Type': 'application/json',
        } ,
          method:'post',
          url:'http://127.0.0.1:5000/add_users ',
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
                
                <Input type="text" value={name_value} onChange={e=> setName(e.target.value)} placeholder="Add User" />
                </FormGroup>
                <Button type='submit' outline color="success" size="sm" >Add User</Button>
            </Form>
       </Col>
    </Row>
    </Container>
    
  );
}

export default AddUser;