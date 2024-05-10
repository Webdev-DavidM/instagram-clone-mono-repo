import React from 'react';
import { render } from '@testing-library/react';

import { Storybook } from '.';

describe('Page', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Storybook />);
    expect(baseElement).toBeTruthy();
  });
});
