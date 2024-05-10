import type { Meta, StoryObj } from '@storybook/react';
import { Storybook } from './storybook';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Storybook> = {
  component: Storybook,
  title: 'Storybook',
};
export default meta;
type Story = StoryObj<typeof Storybook>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Storybook!/gi)).toBeTruthy();
  },
};
