import React, {useState} from 'react'
import { Button,Form,Label,Input,FormGroup,Modal, ModalHeader, ModalBody, ModalFooter ,Col} from 'reactstrap';
import axios from 'axios'
const EditTask = (props)=>{
    const {
      taskDetails,
        modal,
        className,
        onEditTask
      } = props;
    
    const [modal_state, setModalState] = useState(true);
    const {description,Id, state} = {...taskDetails}
    const [newname,setDescription]= useState('')
    
    const toggle = () => setModalState(false);
    const data = {
      id:Id,
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
    
    return (
            <div>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody>
                  <Form onSubmit = {handleEdit}>
                    <FormGroup>
                      <Input type="text" value={newname}  onChange={e=> setDescription(e.target)} placeholder={description} />
                    </FormGroup>
                    
                    <FormGroup tag="fieldset" row>
                      
                      <Col sm={10}>
                      {state}
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio2" />{' '}
                            to do
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio2" />{' '}
                            Done
                          </Label>
                        </FormGroup>
         
        </Col>
      </FormGroup>

                    <Button type='submit' outline color="success" size="sm" >Edit Task</Button>
                  </Form>
  
                   
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>OK</Button>{' '}
        
                </ModalFooter>
             </Modal>
            </div>
        )
}
export default EditTask