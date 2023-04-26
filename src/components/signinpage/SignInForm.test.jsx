import { render, screen } from '@testing-library/react';
import SignInForm from '../signinpage/SignInForm';

describe('Sign Form', () => {
  test('it should have the title Sign in', () => {
    render(<SignInForm />);
    const signBtnText = screen.getByText('Sign In');
    expect(signBtnText).toBeInTheDocument();
  });
});
