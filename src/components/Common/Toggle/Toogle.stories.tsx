import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Toggle } from './index';
import * as S from './styles';

export default {
    title: 'Toggle',
    component: Toggle,
} as Meta;

const Template: StoryFn = (args) => {
    const [isEnabled, setIsEnabled] = useState(args.value);

    const handleToggle = (value: boolean) => {
    setIsEnabled(value);
    if (args.onValueChange) {
      args.onValueChange(value); // 외부 핸들러 호출 (존재할 경우)
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
  value: true, // 초기 상태 On
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Toggle (Off)',
  value: false, // 초기 상태 Off
};