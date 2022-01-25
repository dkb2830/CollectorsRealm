import React, { useState } from 'react'
import axios from 'axios';
const CollectableForm = (props) => {
    const {collectable, setCollectable} = props;
    const [name, setName] = useState(""); 
    const [description, setDescription] = useState("");
    const [comment, setComment] = useState("");
    const [errors, setErrors] = useState([]);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/collectable', {
            name,    
            description,
            comment
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
        <><form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <div className="form-group row">
                <label for="item name" className="col-sm-2 col-form-label">Item Name</label>
                <div className="col-sm-6">
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                </div>
            </div>
            <br />
            <div className="form-group row">
                <label for="description" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-6">
                    <input type="text" className="form-control" onChange={(e) => setDescription(e.target.value)} />
                </div>
            </div>
            <br />
            <input type="submit" />
        </form>
        </>
    )
}
export default CollectableForm;
