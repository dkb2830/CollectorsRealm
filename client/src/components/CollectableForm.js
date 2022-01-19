import React, { useState } from 'react'
import axios from 'axios';
const CollectableForm = (props) => {
    const {collectable, setCollectable} = props; //this is new
    const [name, setName] = useState(""); 
    const [description, setDescription] = useState("");
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/collectable', {
            name,    
            description  
        })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
                // we will update the lifted state of our people array 
                //    to include the current value in state plus the single 
                //    new object created and returned from our post request. 
                setCollectable([...collectable, res.data]); //this is new
            })
            .catch(err=>console.log(err))
    }       // **** Our return/form will remain unchanged!
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Item Name</label><br/>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
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
