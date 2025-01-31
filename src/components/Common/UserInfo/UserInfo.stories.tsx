import type { Meta } from '@storybook/react';
import { UserInfo } from './index';

const meta = {
  title: 'UserInfo',
  component: UserInfo.Item,
  args: {
    name: 'John Doe',
    gender: 'MALE',
    dogGender: 'FEMALE',
    familyRole: 'BROTHER',
    buttonText: 'Edit',
    isLast: false,
  },
  argTypes: {
    onPressButton: { action: 'button clicked' },
  },
  decorators: [Story => <Story />],
} satisfies Meta<typeof UserInfo.Item>;

export default meta;

export const MultipleItemsExample = {
  render: () => (
    <UserInfo.Container
      data={Array.from({ length: 20 }, (_, index) => ({
        name: `User ${index + 1}`,
        gender: index % 2 === 0 ? 'MALE' : 'FEMALE',
        dogGender: index % 3 === 0 ? 'FEMALE' : 'MALE',
        familyRole: index % 4 === 0 ? 'BROTHER' : index % 4 === 1 ? 'SISTER' : index % 4 === 2 ? 'MOTHER' : 'FATHER',
        buttonText: index % 2 === 0 ? 'Edit' : 'View',
        onPressButton: () => {},
      }))}
      keyExtractor={(item, index) => `${item.name}-${index}`}
      renderItem={({ item, index }) => (
        <UserInfo.Item
          name={item.name}
          gender={item.gender}
          dogGender={item.dogGender}
          familyRole={item.familyRole}
          buttonText={item.buttonText}
          isLast={index === 19} // Mark the last item
          onPressButton={() => console.log(`${item.name} button clicked`)}
        />
      )}
    />
  ),
};
