import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import {Link} from '@reach/router';
const Detail = (props) => {
    const [collectable, setCollectable] = useState({})
    const [comment,setComment] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/collectable/" + props.id)
            .then( res => {
                console.log(res.data);
                setCollectable(res.data);
            })
            .catch( err => console.log(err) )
    }, [])//eslint-disable-line react-hooks/exhaustive-deps
    return (
        <><Link to={"/"}>Back to Home</Link><div>
            <p>Name: {collectable.name}</p>
            <p>Description: {collectable.description}</p>
            <hr />
            <CommentForm />
            <hr />

        </div></>
    )
}
export default Detail;

