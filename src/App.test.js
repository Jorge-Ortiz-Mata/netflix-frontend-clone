import { render, screen } from '@testing-library/react';
import App from './App';

describe('Show the welcome texts', () => {
  test('Shows the main message', () => {
    render(<App />)
    const mainText = screen.getByText('Unlimited movies, TV shows, and more.');
    expect(mainText).toBeInTheDocument();
  });

  test('Shows the second message', () => {
    render(<App />)
    const mainText = screen.getByText('Watch anywhere. Cancel anytime.');
    expect(mainText).toBeInTheDocument();
  });

  test('Shows the second message', () => {
    render(<App />)
    const mainText = screen.getByText('Ready to watch? Enter your email to create or restart your membership.');
    expect(mainText).toBeInTheDocument();
  });
})
