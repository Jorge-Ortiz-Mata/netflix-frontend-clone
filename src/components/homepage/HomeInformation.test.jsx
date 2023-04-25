import { render, screen } from '@testing-library/react';
import HomeInformation from './HomeInformation';

describe('Show the welcome texts', () => {
  test('Shows the main message', () => {
    render(<HomeInformation />)
    const mainText = screen.getByText('Unlimited movies, TV shows, and more.');
    expect(mainText).toBeInTheDocument();
  });

  test('Shows a second message', () => {
    render(<HomeInformation />)
    const mainText = screen.getByText('Watch anywhere. Cancel anytime.');
    expect(mainText).toBeInTheDocument();
  });

  test('Shows a third message', () => {
    render(<HomeInformation />)
    const mainText = screen.getByText('Ready to watch? Enter your email to create or restart your membership.');
    expect(mainText).toBeInTheDocument();
  });
})
