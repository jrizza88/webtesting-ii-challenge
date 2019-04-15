import React from 'react';
import 'jest-dom/extend-expect';
import { render, fireEvent } from 'react-testing-library';
import Dashboard from './Dashboard';

describe('The Dashboard Component', () => {
    
    xit('renders Dashboard without crashing', () => {
        render(<Dashboard />);
    });

    it('strike button pressed once', () => {
       const { getByText } = render(<Dashboard />);

       const button = getByText(/Strikes/i)

       fireEvent.click(button);

       getByText(/Strikes/i);
    });
    
 

    it('ball button pressed', () => {
        const { getByText } = render(<Dashboard ball={1}/>);

        const button = getByText(/Balls/i)

        fireEvent.click(button);

        getByText(/Balls/i);
     });

     it('foul button displayed', () => {
        const { getByText } = render(<Dashboard foul={1}/>);
        const button = getByText(/Fouls/i)
        fireEvent.click(button);
        getByText(/fouls/i);
     });

});