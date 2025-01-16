import { Container, Item, Value, Label } from '~components/Common/StatContainer/styles';

export const StatContainer = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

StatContainer.Item = Item;
StatContainer.Value = Value;
StatContainer.Label = Label;
