import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateUser() {
    const { id } = useParams()
    const [Book_name, setBook_name] = useState()
    const [Author, setAuth] = useState();
    const [Summary, setSummary] = useState()
    const [Price, setPrice] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3010/getUser/' + id)
            .then(result => {
                console.log(result)
                setBook_name(result.data.Book_name)
                setAuth(result.data.Author)
                setSummary(result.data.Summary)
                setPrice(result.data.Price)
            })
            .catch(err => console.log(err))
    }, [id])

    const Update = (e) => {
        e.preventDefault()
        axios.put("http://localhost:3010/updateUser/" + id, {  Book_name, Author, Summary,Price })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='d-flex vh-100 bg-warning justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Update}>
                    <h2> Update User </h2>
                    <div className="mb-2">
                        <label htmlFor=""> Name of the book </label>
                        <input type='text' placeholder='Enter Name' className='form-control' value={Book_name}
                            onChange={(e) => setBook_name(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor=""> Author </label>
                        <input type='text' placeholder='Enter text' className='form-control' value={Author}
                            onChange={(e) => setAuth(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor=""> Summary </label>
                        <input type='text' placeholder='Enter Summary' className='form-control' value={Summary}
                            onChange={(e) => setSummary(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor=""> Price </label>
                        <input type='number' placeholder='Enter Price' className='form-control' value={Price}
                            onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <button className='btn btn-success'> Update </button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser






// Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, corporis iusto. Est.