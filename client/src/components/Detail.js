import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Detail = (props) => {
    const [collectable, setCollectable] = useState({})
    //const {id} = props; 
// Reach router creates a key:value pair inside of our props object 
//     for every variable found inside the "path" attribute. 
// For example, the "path" attribute of the Detail component (Code Block 3 - App.js).   
// We can deconstruct the id from props.
// The unique part of our "path" (:id) will have its value 
//    assigned in the Link element's "to" attribute (e.g. Code Block 4)
    useEffect(() => {
        axios.get("http://localhost:8000/api/collectable/" + props.id)
            .then( res => {
                console.log(res.data);
                setCollectable(res.data);
            })
            .catch( err => console.log(err) )
    }, [])//eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div>
            <p>Name: {collectable.name}</p>
            <p>Description: {collectable.description}</p>
        </div>
    )
}
export default Detail;

