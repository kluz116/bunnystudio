import React,{useState} from 'react';
import Users from './components/Users'
import Tasks from './components/Tasks'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import './App.css';
import EditUser from './components/EditUser';
import UserList from './components/UserList';
import EditTask from './components/EditTask';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <Router>  
    
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/Users">BunnyStudio</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
              <Link to={'/Users'} className="nav-link">Users</Link>  
              </NavItem>
              <NavItem>
              <Link to={'/Tasks'} className="nav-link">Tasks</Link>  
              </NavItem>
            </Nav>
            
          </Collapse>
        </Navbar>
      <div className="container">  
        <Switch>  
          <Route exact path='/Users' component={Users} />  
          <Route path='/EditUser/:id' component={EditUser} />  
          <Route path='/EditTask/:id' component={EditTask} />  
          <Route path='/UserList/:id' component={UserList} />  
          <Route path='/Tasks' component={Tasks} />  
        </Switch>  
      </div>  
    </Router> 
  
    </div>
  );
}

export default App;
