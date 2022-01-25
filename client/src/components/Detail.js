import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import {Link} from '@reach/router';
const Detail = (props) => {
    const [collectable, setCollectable] = useState("");
    const [comment, setComment] = useState("");
    const [commentList, setCommentlist] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/collectable/" + props.id)
            .then( res => {
                setCollectable(res.data);
                setCommentlist(res.data.comment);
                console.log(setCollectable);
            })
            .catch( err => console.log(err) )
    }, [])//eslint-disable-line react-hooks/exhaustive-deps
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/collectable/'+ props.id, {
            collectable_comment: comment
        })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
                setComment([...comment, res.data]);
            })
            .catch(err=>console.log(err))
    }
        

    return (
        <><Link to={"/"}>Back to Home</Link>|<Link to={"/collectable/edit/" + collectable._id}>Edit</Link>
        <br/><br/>
        <div>
            <p>Name: {collectable.name}</p>
            <p>Description: {collectable.description}</p>
            {/* <p>{collectable.comment}</p> */}
            <hr />
            <hr />
         <div>
        </div> 
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Comment</label>
                <br/><br/>
                <div>
                    <input type="text" onChange={(e) => setComment(e.target.value)}/>
                </div>
                <br/>
                <input type="submit"/>
            </div>
        </form>
        <br/>
        </div>
        {
                commentList.map((c, index)=>{
                return (
                <div key={index}> 
                    <p>{c.collectable_comment}</p> 
                </div> 
)})
            }

        </>
    )
}
export default Detail;

