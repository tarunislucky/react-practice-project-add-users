import React, { useState } from "react";

const Form = (props) => {
  let [userName, setUserName] = useState("");
  let [age, setAge] = useState("");

  const userNameInputHandler = (e) => {
    setUserName(e.target.value);
  }
  const ageInputHandler = (e) => {
    setAge(e.target.value);
  }
  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onAddUser(userName, age);
  }
  return (
    <form onSubmit={formSubmitHandler} className="form">
      <label>Username</label>
      <input type="text" name="username" onChange={userNameInputHandler} />
      <label>Age(Years)</label>
      <input type="text" name="age" onChange={ageInputHandler} />
      <button type="Submit">Add User</button>
    </form>
  )
}

export default Form;