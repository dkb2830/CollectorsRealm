import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CollectableForm from '../components/CollectableForm';
import CollectableList from '../components/CollectableList';
const Main = () => {
    const [collectable, setCollectable] = useState([]);
    const [loaded, setLoaded] = useState(false);

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
            <h1>Welcome to Collector's Realm!</h1>
            <h2>Enter Your Collectables Here</h2>
            <CollectableForm />
            <hr/>
            {loaded && <CollectableList collectable={collectable} removeFromDom={removeFromDom} />}
        </div>
    )
}
export default Main;