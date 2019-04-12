import React from 'react';
import 'jest-dom/extend-expect';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Dashboard from './Dashboard';

describe('The Dashboard Component', () => {
    
    it('renders Dashboard without crashing', () => {
        render(<Dashboard />);
    });
});