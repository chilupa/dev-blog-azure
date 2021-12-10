import React from 'react';
import { render } from '@testing-library/react';
import Toast from '../Toast';

describe('Toast', () => {
  it('should render Toast component', () => {
    const props = {
      open: true,
      setOpen: jest.fn(),
      message: 'done!',
    };
    const { getByTestId } = render(<Toast {...props} />);
    expect(getByTestId('snackbar')).toBeInTheDocument();
  });

  it('should not render Toast component', () => {
    const props = {
      open: false,
      setOpen: jest.fn(),
      message: 'done!',
    };
    const { queryByTestId } = render(<Toast {...props} />);
    expect(queryByTestId('snackbar')).toBeNull();
  });
});
