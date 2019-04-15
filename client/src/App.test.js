import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from './baseball/Dashboard/Dashboard';
import Display from './baseball/Display/Display';
import 'jest-dom/extend-expect';
import { render, fireEvent, cleanup } from 'react-testing-library';
// afterEach(cleanup)

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
    const { getByText } = render(<Dashboard />);
  
    const button = getByText("Strikes");
  
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
 
  const { queryByText } = render(<Display />);

  const text = queryByText(/Strike: 0/i)
  expect(text).toBeInTheDocument();
    // getByText(/Strike: 2/i);
  
  });


  it('clicks strike twice!!', () => {
  
    const { getByText } = render(<App />);
  
    const button = getByText(/Strikes/i)

  
    fireEvent.click(button);
    fireEvent.click(button);

    getByText(/Strike: 2/i);

  // using hit button to clear out strikes
    const hitBut = getByText(/Hits/i)

    fireEvent.click(hitBut);
  });

  it('clicks strike once', () => {
  
    const { getByText } = render(<App />);
  
    const button = getByText(/Strikes/i)

  
    fireEvent.click(button);

    getByText(/Strike: 1/i);

    // using hit button to clear out strikes
    const hitBut = getByText(/Hits/i)

    fireEvent.click(hitBut);

  });



  it('ball button clicked!', () => {
    const { getByText } = render(<Dashboard />);

    const button = getByText("Balls");


    const { queryByText } = render(<Display />);

    fireEvent.click(button);

    const text = queryByText(/Balls: 1/i);
    expect(text).toBeInTheDocument();

    fireEvent.click(button);
    const text2 = queryByText(/Balls: 2/i);
    expect(text2).toBeInTheDocument();

    fireEvent.click(button);
    const text3 = queryByText(/Balls: 3/i);
    expect(text3).toBeInTheDocument();

    fireEvent.click(button);
    const text4 = queryByText(/Balls: 0/i);
    expect(text4).toBeInTheDocument();

    // getByText(/Balls: 1/i)
  })

  it('foul button causes a strike', () => {
    const { getByText } = render(<App />);
    const button = getByText(/Fouls/i)
    fireEvent.click(button);
    getByText(/Strike: 1/i);

    fireEvent.click(button);
    getByText(/Strike: 2/i);
 });

});
