import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('buttons', () => {
  test('it should say Sign in', () => {
    render(<Navbar />);
    const signBtnText = screen.getByText('Sign In');
    expect(signBtnText).toBeInTheDocument();
  })
})
