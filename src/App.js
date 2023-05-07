import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uname, uage) => {
    setUsersList((prevState) => {
      return [{ username: uname, age: uage, key: Math.random() }, ...prevState];
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
