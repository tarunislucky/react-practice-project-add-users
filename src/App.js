import React, { useState } from 'react';
import "./App.css";
import Container from './components/Container';
import Card from './Card';
import Form from './components/Form';
import UserList from "./components/UserList";
import Overlay from './components/Overlay';
import AlertWindow from './components/AlertWindow';
function App() {
  const [users, setUsers] = useState([]);
  let [isValid, setIsValid] = useState(true);
  let [errorMessage, setErrorMessage] = useState("");

  let data = <p>No users found</p>;

  const addUserHandler = (username, age) => {
    //empty fields handle
    if (!username || !age) {
      setErrorMessage("Please enter a name and age(none empty values)");
      setIsValid(false);
      return;
    }
    //invalid age
    if (age <= 0) {
      setErrorMessage("Please enter valid age (> 0)");
      setIsValid(false);
      return;
    }
    //create user object using username and age 
    const user = { username: username, age: age, key: Math.random() };
    //add user to state
    setUsers((prevState) => {
      return [user, ...prevState];
    })
  }
  const closeModal = () => {
    setIsValid(true);
  }
  if (users.length > 0) {
    data = <UserList usersData={users} />
  }

  return (
    <Container>
      <Card>
        <Form onAddUser={addUserHandler} />
      </Card>
      <Card className="card">{data}</Card>
      <Overlay isvalid={isValid} closemodal={closeModal} />
      <AlertWindow isvalid={isValid} errormessage={errorMessage} onCloseModal={closeModal} />
    </Container>
  );
}

export default App;
