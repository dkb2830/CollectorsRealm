import React, { useState } from 'react'
import axios from 'axios';
const CommentForm = (props) => {
    const {item_comment, setComment} = props;
    const [commentText, setCommentText] = useState("");
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/collectable/', {
            commentText  
        })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
                setComment([...item_comment, res.data]);
            })
            .catch(err=>console.log(err))
    }       
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Comment</label><br/>
                <input type="text" onChange = {(e)=>setCommentText(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default CommentForm;
