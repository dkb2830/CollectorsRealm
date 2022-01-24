import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Update = (props) => {
    const { id } = props; 
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    useEffect(() => {
        axios.get('http://localhost:8000/api/collectable/' + id)
            .then(res => {
                setName(res.data.name);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])
    const updateCollectable = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/collectable/' + id, {
            name,   
            description     
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update Collectable Item</h1>
            <form onSubmit={updateCollectable}>
                <p>
                    <label>Name</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Update;

