import React from 'react';

const Display = props => {
const { balls, strike = [] } = props;
    return (
        <>
            <h3>Display</h3>
            <div>Balls: {balls}</div>
            <div>Strike: {strike}</div>
        </>
    )
}


export default Display;