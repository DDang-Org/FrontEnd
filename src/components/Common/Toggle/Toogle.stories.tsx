import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Toggle } from './index';
import * as S from './styles';

export default {
  title: 'Toggle',
  component: Toggle,
} as Meta;

const Template: StoryFn = args => {
  const [isEnabled, setIsEnabled] = useState(args.value);

  const handleToggle = (value: boolean) => {
    setIsEnabled(value);
    if (args.onValueChange) {
      args.onValueChange(value);
    }
  };

  return (
    <S.StoryWrapper>
      <Toggle {...args} value={isEnabled} onValueChange={handleToggle} />
    </S.StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Toggle (On)',
  value: true,
};

export const OffToggle = Template.bind({});
OffToggle.args = {
  label: 'Toggle (Off)',
  value: false,
};
