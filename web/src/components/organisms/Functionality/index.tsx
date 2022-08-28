import { AnchorHTMLAttributes } from 'react';
import { Container, Title, Text } from './styles';

export type Props = AnchorHTMLAttributes<HTMLElement> & {
  title: string;
  description: string;
  url: string;
};

export function Functionality({ title, description, url, ...rest }: Props) {
  return (
    <Container href={url} {...rest}>
      <Title>{title} &rarr;</Title>
      <Text>{description}</Text>
    </Container>
  );
}
