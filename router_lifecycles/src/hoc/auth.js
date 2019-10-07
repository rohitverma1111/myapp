import React from 'react';

const Auth = (props) => {
    const pass = "1234";
    if(pass === '12345'){
        return props.children;
    }else{
        return <h3>You are not Aurthorized!</h3>
    }
}

export default Auth; 