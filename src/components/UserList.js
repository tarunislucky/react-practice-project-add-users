import React from "react";
const UserList = (props) => {

  return (
    <div className="user-list">
      {
        props.usersData.map(user => {
          return (<div className="user" key={user.key}>
            <p>{user.username} ({user.age} years old)</p>
          </div>)
        })
      }
    </div>
  )
}

export default UserList;
