import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'jest-dom/extend-expect';
import { render, fireEvent, cleanup } from 'react-testing-library';

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
render(<App />);
});

describe('Dashboard buttons in App', () => {

  it('striked out!!', () => {
    const { getByText } = render(<App />);
  
    const button = getByText(/Strikes:/i)
  
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
  
    getByText(/Strikes: 0/i);
  });

  it('two strikes!!', () => {
    const { getByText } = render(<App strike={2}/>);
  
    const button = getByText(/Strikes:/i)
  
    fireEvent.click(button);
    fireEvent.click(button);
 
  cleanup();
    getByText(/Strikes: 2/i);
  });

});
