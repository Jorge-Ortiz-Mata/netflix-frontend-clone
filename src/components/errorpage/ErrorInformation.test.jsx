import { render, screen } from '@testing-library/react';
import ErrorInformation from './ErrorInformation';

describe('Show the welcome texts', () => {
  test('it shows a title', () => {
    render(<ErrorInformation />)
    const mainText = screen.getByText('Lost your way?');
    expect(mainText).toBeInTheDocument();
  });

  test('it shows a brief description', () => {
    render(<ErrorInformation />)
    const mainText = screen.getByText("Sorry, we can't find that page. You'll find lots to explore on the home page.");
    expect(mainText).toBeInTheDocument();
  });

  test('it returns a button', () => {
    render(<ErrorInformation />)
    const mainText = screen.getByText('Netflix Home');
    expect(mainText).toBeInTheDocument();
  });

  test('it returns the error code', () => {
    render(<ErrorInformation />)
    const mainText = screen.getByText('Error Code');
    expect(mainText).toBeInTheDocument();
  });

  test('it returns the error status', () => {
    render(<ErrorInformation />)
    const mainText = screen.getByText('NSES-404');
    expect(mainText).toBeInTheDocument();
  });
})
