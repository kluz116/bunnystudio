import React, {useState} from 'react'
import { Button,Form,Label,Input,FormGroup,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'
const EditUser = (props, {onViewUser})=>{
    const {
        userdetails,
        modal,
        className
      } = props;
    
    const [modal_state, setModalState] = useState(true);
    const {name,id} = {...userdetails}
    const [newname,setName]= useState('')
 

    const toggle = () => setModalState(!modal);
    const data = {
      id:id,
      name:newname
    }

    console.log(data)
    
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
            <div>
                <Modal isOpen={modal} toggle={onViewUser} className={className}>
                <ModalHeader toggle={onViewUser}></ModalHeader>
                <ModalBody>
                  <Form onSubmit = {handleEdit}>
                    <FormGroup>
    
                      <Input type="text" value={newname}  onChange={e=> setName(e.target.value)} placeholder={name} />
                    </FormGroup>
                    <Button type='submit' outline color="success" size="sm" >Edit User</Button>
                  </Form>
  
                   
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>OK</Button>{' '}
        
                </ModalFooter>
             </Modal>
            </div>
        )
}
export default EditUser