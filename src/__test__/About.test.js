import { screen, render } from '@testing-library/react';

import AboutMe from '../Data-display/About';
import ProjectCard from '../Components/ProjectCard';
import { project } from '../Data/project';

test('First case for about page', () => {
  render(<AboutMe lul={'test'} />);
  const img = screen.getByAltText('something went wrong');
  expect(img).toBeInTheDocument();
});

describe('api test case group 1', () => {
  test('group case', () => {
    render(<AboutMe lul={'test'} />);
    const img = screen.getByAltText('something went wrong');
    expect(img).toHaveClass('object-cover');
  });
  test('group case 2', () => {
    render(<AboutMe lul={'test'} />);
    const img = screen.getByAltText('something went wrong');
    expect(img).toHaveClass('object-cover');
  });
});

describe('upi test case group 1', () => {
  test('group case', () => {
    render(<AboutMe lul={'test'} />);
    const img = screen.getByAltText('something went wrong');
    expect(img).toHaveClass('object-cover');
  });
  test('group case 2', () => {
    render(<ProjectCard data={project[0]} />);
    const img = screen.getByRole('test1');
    expect(img).toHaveClass('object-fit');
    const img2 = screen.queryByRole('button');
    expect(img2).toBe(null);
  });
});
