import React, { useState } from 'react'
import axios from 'axios';
import CollectableForm from '../components/CollectableForm';
import CollectableList from '../components/CollectableList';
const Main = (props) => {
    
    const [collectable, setCollectable] = useState([]);
    
    return (
        <div>
            <CollectableForm collectable={collectable} setCollectable={setCollectable} />
            <hr/>
            <CollectableList collectable={collectable} setCollectable={setCollectable} />

        </div>
    )
}
export default Main;