import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
const CollectableList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (PersonList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    const {removeFromDom, collectable, setCollectable} = props;
    const deleteCollectable = (collectableId) => {
        axios.delete('http://localhost:8000/api/collectable/' + collectableId)
            .then(res => {
                removeFromDom(collectableId)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            {
                collectable.map((c, index)=>{
                return (
                <div key={index}> 
                    <h2>{c.name}</h2> 
                    <p>{c.description}</p>
                    <Link to={`/collectable/${c._id}`}>View Collectable</Link>
                    |
                    <Link to={"/collectable/edit/" + c._id}>Edit</Link>
                    |
                    <button onClick={(e)=>{deleteCollectable(c._id)}}>
                            Delete
                    </button>
                </div> 
)})
            }
        </div>
    )
}
export default CollectableList;

