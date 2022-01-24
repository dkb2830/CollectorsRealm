import React, {useEffect, useState} from 'react';
import axios from 'axios';
const CommentList = (props) => {
    const {comment} = props;
        const [ commentList, setCommentList] = useState("");
        useEffect(() =>{
            axios.get('http://localhost:8000/api/collectable') 
            .then(res => 
                setCommentList({...res.data
                }))        
    },[])

    return (
        <div>
            {
                comment.map((com, index)=>{
                return (
                <div key={index}> 
                    <p>{com.comment}</p> 
                </div> 
)})
            }
        </div>
    )
}
export default CommentList;

