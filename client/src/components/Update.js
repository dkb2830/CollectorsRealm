import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Update = (props) => {
    const { id } = props; //this process is identical to the one we used with our Details.js component
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    // retrieve the current values for this person so we can fill
    // in the form with what is in the db currently
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
            name,    // this is shortcut syntax for firstName: firstName,
            description      // this is shortcut syntax for lastName: lastName
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

