import React, { useState } from 'react'
import axios from 'axios';
import CollectableForm from '../components/CollectableForm';
import CollectableList from '../components/CollectableList';
const Main = (props) => {
    
    const [collectable, setCollectable] = useState([]);
    const removeFromDom = collectableId => {
        setCollectable(collectable.filter(collectable => collectable._id !== collectableId)); //We could also write this in our PersonList component
    }
    return (
        <div>
            <CollectableForm collectable={collectable} setCollectable={setCollectable} />
            <hr/>
            <CollectableList collectable={collectable} setCollectable={setCollectable} removeFromDom={removeFromDom} />

        </div>
    )
}
export default Main;