import { render, screen } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';
import Navigation from './Components/Navigation';
import Resize from './Context/resize';
import MenuBar from './Components/MenuBar';

test('first test case', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi I am Deepanshu/i);
  expect(linkElement).toBeInTheDocument();
});

test('second test case', () => {
  render(
    <Resize>
      <Navigation />
    </Resize>
  );
  const linkElement = screen.getByText(/Projects/i);
  expect(linkElement).toBeInTheDocument();
});
test('third test case', () => {
  render(<MenuBar />);
  const linkElement = screen.getByText(/Projects/i);
  expect(linkElement).toBeInTheDocument();
});

test('take snapshot', () => {
  const mainCont = render(<App />);
  expect(mainCont).toMatchSnapshot();
});

test('get by role testcase', () => {
  render(<App />);
  const role = screen.getAllByRole('img');
  role.forEach((el) => {
    expect(el).toBeInTheDocument();
    // try {
    //   expect(el).toHaveAttribute('alt');
    // } catch (error) {
    //   // log index + element’s outerHTML for debugging
    //   console.error(`Element failed:`, prettyDOM(el));
    //   throw error; // re-throw so test actually fails
    // }
  });
});
