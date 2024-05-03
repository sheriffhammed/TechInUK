import { useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const usersArray = [];
  let url = "https://jsonplaceholder.typicode.com/users";
  const fetchData = async () => {
    let { data } = await axios.get(url);
    const iterator = data.values();
    for (const value of iterator) {
      usersArray.push(Object.fromEntries(Object.entries(value).slice(0, 3)));
    }
    setUsers(usersArray);
    console.log("All Users", usersArray);
  };

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          My Name is <b>{user.name}</b> with UserName: <b>{user.username}</b>
          and ID:
          <b>{user.id}</b>
        </div>
      ))}
      <button onClick={fetchData}> retreive Data</button>
    </>
  );
}
export default App;
