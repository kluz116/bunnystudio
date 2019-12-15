import React, {useState, useEffect} from 'react'
import { Button,Form,Input,FormGroup,Row,Col} from 'reactstrap';
import axios from 'axios'
import { useParams} from "react-router";


const EditUser = (props)=>{
  let { id } = useParams();
    
    const [newname,setName]= useState('')
    const [userdetails, setUsersDetails] = useState([])
 
    const data = {
      id:userdetails.id,
      name:newname
    }
 
   useEffect(()=>{
    axios.get('http://127.0.0.1:5000/userdetails/'+id)
    .then(response =>{
        setUsersDetails(...response.data)    
    })
    .catch(error =>{
        console.log(error)
    })
   })

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
    
    return (
            
              <Row>
                <Col xs="4"></Col>
                <Col xs="4">
                  <Form onSubmit = {handleEdit}>
                     <h3>Update </h3>
                    <FormGroup>
                      <Input type="text" value={newname}  onChange={e=> setName(e.target.value)} placeholder={userdetails.name} />
                    </FormGroup>
                    <Button type='submit' outline color="success" size="sm" >Update {userdetails.name}</Button>
                  </Form>
                </Col>
                <Col xs="4"></Col>
              </Row>
                 
        )
}
export default EditUser