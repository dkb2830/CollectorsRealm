import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

function CollectableList(props) {
    /* We deconstruct getter and setter which were passed down
    via props by the parent component (app.js) to our child
    component (PersonList.js). Now we can easily use the getter
    and setter without having to write props.getter or props.setter every time: */
    const { collectable, setCollectable } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/collectable")
            .then((res) => {
                console.log(res.data);
                setCollectable(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []); //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            {collectable.map((c, index) => {
                //return <p key={index}>{c.name}, {c.description}</p>
                return <>
                    <h2 key={index}>{c.name}</h2>
                    <p>{c.description}</p>
                </>;
            })}
        </div>
    );
}
export default CollectableList;

