import { useEffect, useState } from 'react'
import './App.css'

function App() {

  let [users,setUsers]= useState([])

  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
    .then((response) => { return response.json() })
    .then((data) => { setUsers(data) })
    .catch((err) => { console.log(err) })
  },[])

  console.log(users)

  return (
    <>
        <table>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>phone</th>
          </tr>
        
      {
        users.map((user)=>{
          return (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          )
        })
      }
      </table>
    </>
  )
}

export default App
