import React from 'react';

const Dashboard = props => {
    // const {}
    const {strike, ball, foul, hit = [] } = props;
    return (
        <>
            <h3>Dashboard</h3>
            <button>{strike}</button>
            <button>{ball}</button>
            <button> {foul}</button>
            <button> {hit}</button>
        </>
    )
}

export default Dashboard;