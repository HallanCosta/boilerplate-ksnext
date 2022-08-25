import { AnchorHTMLAttributes } from 'react';
import { Container, Title, Text } from './styles';

export type Props = AnchorHTMLAttributes<HTMLElement> & {
  title: string;
  text: string;
}

export function Card({ 
  title, 
  text, 
  ...rest 
}: Props) {
  return (
    <Container href="https://nextjs.org/docs">
      <Title>{title} &rarr;</Title>
      <Text>{text}</Text>
    </Container>
  );
}