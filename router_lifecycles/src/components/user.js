import React from 'react';
import userHoc from '../hoc/userHoc';
const User = (props) =>{
    return(
        
        <div>
            {console.log(props)}
            User
        </div>
    )
}

const User1 = (props) =>{
    return(
        
        <div>
            {console.log(props)}
            User1
        </div>
    )
}

export default userHoc(User, User1,  'Hello');