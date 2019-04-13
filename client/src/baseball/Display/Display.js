import React from 'react';

const Display = props => {
const {balls, strikes = [] } = props;
    return (
        <>
            <h3>Display</h3>
            <div>Balls: {balls}</div>
            <div>Strikes: {strikes}</div>
        </>
    )
}

export default Display;