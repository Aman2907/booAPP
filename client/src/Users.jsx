import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'


function Users() {

  const [users, setUsers] = useState([]);



  useEffect(() => {
    axios.get('http://localhost:3010')
      .then(result => setUsers(result.data))
      .catch(err => console.log(err))
  })

  const handleDelete = (id) => {
    axios.delete('http://localhost:3010/deleteUser/' + id)
      .then(res => {
        console.log(res)
        window.location.reload()
      })
      .catch(err => console.log(err))
  }

  const View = (id) => {
    axios.get('http://localhost:3010/getUser/' + id)
      .then(res => {
        console.log(res)
        window.location.reload()
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='d-flex vh-100 bg-warning justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
       

        <Link to="/create" className='btn btn-success '>AddBook</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Author</th>
              <th>Summary</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => {
                return <tr>
                  <td>{user.Book_name}</td>
                  <td>{user.Author}</td>
                  <td>{user.Summary}</td>
                  <td>{user.Price}</td>
                  <td>
                    <Link to={`/Update/${user._id}`} className='btn btn-primary'>Update</Link>
                    <button className='btn btn-primary margin-left'
                      onClick={(e) => handleDelete(user._id)}> Delete
                    </button>
                     <button className='btn btn-primary margin-left'
                      onClick={(e) => View(user._id)}> View
                    </button> 
                    
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
