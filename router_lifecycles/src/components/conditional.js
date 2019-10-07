import React from 'react';

const Conditional = () =>{
    const returnValue = () =>{
        return true;
    }
    const showIt = () =>{
        return(
            returnValue() ?
            <div>true</div>
            :
            <div>false</div>
        )
    }
    return(
        <div>
            {showIt()}
        </div>
    )
}
export default Conditional;