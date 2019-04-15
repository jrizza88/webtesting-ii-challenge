import React from 'react';


// const Dashboard = props => {
//     const {strike, ball, foul, hit } = props;
//     return (
//         <>
//             <h3>Dashboard</h3>
//             <button onClick={strike}>Strikes</button>
//             <button onClick={ball}>Balls</button>
//             <button onClick={foul}>Fouls</button>
//             <button onClick={hit}> Hits</button>
//         </>
//     )
// }

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {};
      }
    
    render () {
        const {strike, balls, foul, hit = [] } = this.props;
    return (
        <>
            <h3>Dashboard</h3>
            <button onClick={strike}>Strikes</button>
            <button onClick={balls}>Balls</button>
            <button onClick={foul}>Fouls</button>
            <button onClick={hit}> Hits</button>
        </>
    )
    }
}

export default Dashboard;