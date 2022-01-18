import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CollectableForm from '../components/CollectableForm';
import CollectableList from '../components/CollectableList';
const Main = (props) => {
    
    const [collectable, setCollectable] = useState([]);
    const [loaded,setLoaded] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/collectable')
            .then(res => {
                setCollectable(res.data);
                setLoaded(true);
            })
    }, [])

    const removeFromDom = collectableId => {
        setCollectable(collectable.filter(collectable => collectable._id !== collectableId));
    }

    return (
        <div>
            <CollectableForm/>
        </div>
    )
}
export default Main;