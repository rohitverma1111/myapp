import React from 'react';

const userHoc = (Comp, Comp2, arg) =>{
    return (props)=>(
        <div>
               {console.log(props)}
            {arg}
            <Comp {...props} />
            <Comp2 />
        </div>
    )
}
export default userHoc;