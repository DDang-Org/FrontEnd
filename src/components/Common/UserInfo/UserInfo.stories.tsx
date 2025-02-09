import type { Meta } from '@storybook/react';
import { UserInfo } from './index';
import { Gender } from '~types/gender';
import { AvatarNumber } from '~types/avatar-number';
import { FamilyRole } from '~types/family-role';

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
    <UserInfo.Container>
      {Array.from({ length: 20 }, (_, index) => ({
        name: `User ${index + 1}`,
        gender: index % 2 === 0 ? 'MALE' : ('FEMALE' as Gender),
        dogGender: index % 3 === 0 ? 'FEMALE' : ('MALE' as Gender),
        familyRole: (index % 4 === 0
          ? 'BROTHER'
          : index % 4 === 1
          ? 'SISTER'
          : index % 4 === 2
          ? 'MOTHER'
          : 'FATHER') as FamilyRole,
        buttonText: index % 2 === 0 ? 'Edit' : 'View',
        onPressButton: () => {},
        avatarNumber: 1 as AvatarNumber,
        userId: index,
      })).map((item, index) => (
        <UserInfo.Item
          name={item.name}
          key={`${item.name}-${index}`}
          gender={item.gender}
          dogGender={item.dogGender}
          familyRole={item.familyRole}
          buttonText={item.buttonText}
          isLast={index === 19} // Mark the last item
          onPressButton={() => console.log(`${item.name} button clicked`)}
          avatarNumber={item.avatarNumber}
          userId={item.userId}
        />
      ))}
    </UserInfo.Container>
  ),
};
