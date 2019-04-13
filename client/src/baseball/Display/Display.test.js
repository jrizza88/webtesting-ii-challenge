import React from 'react';
import Display from './Display';
import 'jest-dom/extend-expect';
// import { render, fireEvent, cleanup } from 'react-testing-library';
import { render, fireEvent, cleanup } from 'react-testing-library';

describe('The Display Component', () => {
    
    it('renders Display of balls and strikes without crashing', () => {
        render(<Display />);
    });

    it('1 ball has occured', () => {
  const balls = 1;
        const { getByText } = render(<Display balls={balls} />);
            getByText(/balls/i);
    })

    it('1 strike has occured', () => {
    const strike = 1;
        const {queryByText} = render(<Display strike={strike} />);
        const text = queryByText(/Strikes/i)

        expect(text).toBeInTheDocument();
    })
});