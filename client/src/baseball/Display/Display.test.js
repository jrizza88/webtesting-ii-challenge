import React from 'react';
import Display from './Display';
import 'jest-dom/extend-expect';
// import { render, fireEvent, cleanup } from 'react-testing-library';
import { render, fireEvent, cleanup } from 'react-testing-library';

describe('The Display Component', () => {
    
    it('renders Display without crashing', () => {
        render(<Display />);
    });
});