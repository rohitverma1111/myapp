import React from 'react';
const Posts = (props) =>{
    return(
        <div>
            {props.match.params.id} - {props.match.params.username}
        </div>
    )
}
export default Posts;