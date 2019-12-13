import React, {useState} from 'react'
import { Button,Table,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const UserList = (props, {onViewUser})=>{
    const {
      userTask,
        modal,
        className
      } = props;
    
    const [modal_state, setModalState] = useState(true);

    const toggle = () => setModalState(!modal);
    
    return (
            <div>
                <Modal isOpen={modal} toggle={onViewUser} className={className}>
                <ModalHeader toggle={onViewUser}></ModalHeader>
                <ModalBody>
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
  
                   
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>OK</Button>{' '}
        
                </ModalFooter>
             </Modal>
            </div>
        )
}
export default UserList