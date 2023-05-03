import React, { useState } from 'react';
import "./App.css";
import UserList from "./UserList";
import Card from './Card';
function App() {
  const [users, setUsers] = useState([]);
  let [userName, setUserName] = useState("");
  let [age, setAge] = useState("");
  let [isValid, setIsValid] = useState(true);
  let [errorMessage, setErrorMessage] = useState("");

  let data = <p>No users found</p>;

  const userNameInputHandler = (e) => {
    setUserName(e.target.value);
  }
  const ageInputHandler = (e) => {
    setAge(e.target.value);
  }
  const addUserHandler = (e) => {
    e.preventDefault();
    //empty fields handle
    if (!userName || !age) {
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
    const user = { username: userName, age: age, key: Math.random() };
    //add user to state
    setUsers((prevState) => {
      return [user, ...prevState];
    })
  }
  const closeModal = () => {
    setIsValid(true);
  }

  if (users.length > 0)
    data = <UserList usersData={users} />
  return (
    <div className={"container"}>
      <Card>
        <form onSubmit={addUserHandler} className="form">
          <label>Username</label>
          <input type="text" name="username" onChange={userNameInputHandler} />
          <label>Age(Years)</label>
          <input type="text" name="age" onChange={ageInputHandler} />
          <button type="Submit">Add User</button>
        </form>
      </Card>
      <Card className="card">{data}</Card>
      <div className={`overlay ${isValid ? "hidden" : ""}`} onClick={closeModal}>
      </div>
      <div className={`alert-window ${isValid ? "hidden" : ""}`}>
        <h2 className='alert-heading'>Invalid input</h2>
        <p className='alert-message'>{errorMessage}</p>
        <button onClick={closeModal}>Okay</button>
      </div>
    </div >
  );
}

export default App;
