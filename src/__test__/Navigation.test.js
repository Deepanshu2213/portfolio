import {
  screen,
  render,
  fireEvent,
  act,
  prettyDOM,
  logRoles,
} from '@testing-library/react';
import Navigation from '../Components/Navigation';
import userEvent from '@testing-library/user-event';
import Resize from '../Context/resize';

function resizeScreen(width) {
  // change window width
  window.innerWidth = width;
  // dispatch the resize event
  window.dispatchEvent(new Event('resize'));
}

beforeAll(() => {
  resizeScreen(500);
});

afterAll(() => {
  console.log('after every case');
});

beforeEach(() => {
  console.log('Before every case');
});

test('check navigation opening', async () => {
  userEvent.setup();
  render(
    <Resize>
      <Navigation />
    </Resize>
  );
  const menuIcon = screen.getByTestId('menuIcon');
  fireEvent.click(menuIcon);
  expect(screen.getByTestId('menuBar')).toBeInTheDocument();
  const ele = screen.queryByText((text, ele) => {
    return text === 'Skills';
  });
  expect(ele).toBeInTheDocument();
  //fireEvent.click(window);
  await act(async () => {
    //good way
    await userEvent.click(ele);
  });
  const newMenu = screen.queryByTestId('menuBar');
  expect(newMenu).toBeNull();
});

test('mocking function', async () => {
  const user = userEvent.setup();
  const jestFn = jest.fn();

  render(
    <Resize>
      <Navigation jestFn={jestFn} />
    </Resize>
  );
  const menuIcon = screen.getByTestId('menuIcon');
  expect(menuIcon).toBeInTheDocument();
  await user.click(menuIcon);
  // expect(jestFn).toHaveBeenCalled();
});
// const customEvent = new CustomEvent("myEvent", {
//   detail: { foo: "bar" }
// });

// document.addEventListener("myEvent", e => {
//   console.log("Custom event fired with data:", e.detail);
// });

// document.dispatchEvent(customEvent);

test('printing dom while debugging test case', () => {
  const { container, debug } = render(
    <Resize>
      <Navigation />
    </Resize>
  );
  //console.log(prettyDOM(container));
  debug();
  //logRoles(container);
  expect(container).toBeInTheDocument();
});
