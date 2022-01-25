import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
const CollectableList = (props) => {
    //const [ collectableList, setCollectableList] = useState("");
    //useEffect(() =>{
       // axios.get('http://localhost:8000/api/collectable') 
       // .then(res => 
         //   setCollectableList({...res.data
           //     }))        
    //},[])
    const {removeFromDom, collectable} = props;
    const deleteCollectable = (collectableId) => {
        axios.delete('http://localhost:8000/api/collectable/' + collectableId)
            .then(res => {
                removeFromDom(collectableId);
            })
            .catch(err => console.log(err));
    }
                
    return (
        <div>
            {
                collectable.map((c, index)=>{
                return (
                <div key={index}> 
                    <h2>{c.name}</h2> 
                    <p>{c.description}</p>
                    <Link to={`/collectable/${c._id}`} className='link'>View Collectable</Link>|<Link to={"/collectable/edit/" + c._id} className='link'>Edit</Link>|<button onClick={(e)=>{deleteCollectable(c._id)}}>Delete</button>
                    <br/>
                </div> 
)})
            }
        </div>
    )
}
export default CollectableList;

