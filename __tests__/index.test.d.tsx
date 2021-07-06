import { render, screen } from '@testing-library/react';
import Static from '../pages/index';

describe('Static', () => {
  it('renders without crashing', () => {
    render(<Static serverMessage="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
