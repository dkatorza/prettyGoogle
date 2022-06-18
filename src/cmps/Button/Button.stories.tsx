import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'Text',
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Lollipop = Template.bind({});
export const Success = Template.bind({});

Primary.args = {
  default: true,
  label: 'Button',
  children: 'Primary',
};
Secondary.args = {
  variant: 'secondary',
  label: 'Button',
  children: 'Secondary',
};
Lollipop.args = {
  variant: 'lollipop',
  label: 'Button',
  children: 'Lollipop',
};
Success.args = {
  variant: 'success',
  label: 'Button',
  children: 'Success',
};
