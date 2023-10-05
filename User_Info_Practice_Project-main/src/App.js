import React, { useState } from "react";

import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";
import ErrorModal from "./components/errorModal/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const addUserHandler = (userInput) => {
    // Use the spread operator to create a new array with the updated user list.
    setUsers((prevUsers) => [...prevUsers, userInput]);
    console.log(users); // This will log the previous state, not the updated one.
  };

  const errorHandler = (errorInfo) => {
    setError(errorInfo);
  };

  const modalConfirmHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={modalConfirmHandler}
        />
      )}
      <AddUser onAddUser={addUserHandler} onError={errorHandler} />
      <UserList data={users} />
    </div>
  );
}

export default App;
