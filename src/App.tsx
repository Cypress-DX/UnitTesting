import React from 'react';
import './App.css';


function App() {

  const users = ["Alex", "Bob", "Mik", "Ana", "Nina", "Zoe"]
  const usersObject = [{id: 24234, name: "Alex"}, {id: 1513, name: "Bob"}, {id: 111000, name: "Mik"}, {id: 322132, name: "Ana"}, {id: 23529358, name: "Nina"}, {id: 12434444, name: "Zoe"}]
  const liElements = usersObject.map(u => <li key = {u.id}>{u.name}</li>)

  return (
      <div className="App">
        <ul>
          {liElements}
        </ul>
      </div>
  );

}



export default App;
