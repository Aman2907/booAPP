import React, { useState } from 'react'
// import { Form } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function CreateUser() {
  const [Book_name, setBook_name] = useState()
  const [Author, setAuth] = useState();
  const [Summary, setSummary] = useState()
  const [Price, setPrice] = useState();
  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3010/createUser", { Book_name, Author, Summary, Price })
      .then(result => {
        console.log(result)
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='d-flex vh-100 bg-warning justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Submit}>
          <h2> Add user </h2>
          <div className="mb-2">
            <label htmlFor=""> Name of Book </label>
            <input type='text' placeholder='Enter Name' className='form-control'
              onChange={(e) => setBook_name(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor=""> Author </label>
            <input type='text' placeholder='Enter Author' className='form-control'
              onChange={(e) => setAuth(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor=""> Summary </label>
            <input type='text' placeholder='Enter Summary' className='form-control'
              onChange={(e) => setSummary(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor=""> Price </label>
            <input type='number' placeholder='Enter Price' className='form-control'
              onChange={(e) => setPrice(e.target.value)} />
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>

  )
}

export default CreateUser
