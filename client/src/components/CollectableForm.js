import React, { useState } from 'react'
import axios from 'axios';
const CollectableForm = (props) => {
    const {collectable, setCollectable} = props;
    const [name, setName] = useState(""); 
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/collectable', {
            name,    
            description  
        })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
                setCollectable([...collectable, res.data]);
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }       
    return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Item Name</label><br/>
                <input type="text" onChange = {(e)=>setName(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default CollectableForm;
