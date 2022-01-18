import React, {useState, useEffect} from 'react'
import axios from 'axios';

const CollectableList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (PersonList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    const {collectables, setCollectables} = props;
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/collectables")
        .then((res)=>{
        console.log(res.data);
            setCollectables(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    
    return (
        <div>
            {
                collectables.map((collectable, index)=>{
                return <p key={index}>{collectable.name}, {collectable.description}</p>
                })
            }
        </div>
    )
}
export default CollectableList;

